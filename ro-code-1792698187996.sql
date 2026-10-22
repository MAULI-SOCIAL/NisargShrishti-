-- Create Bookings Table
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_reference VARCHAR(20) UNIQUE NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    customer_phone VARCHAR(15) NOT NULL,
    visit_date DATE NOT NULL,
    slot_id VARCHAR(20) NOT NULL,
    guest_count INT NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'PENDING_PAYMENT',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '10 minutes')
);

-- Atomic Hold Function to prevent double booking
CREATE OR REPLACE FUNCTION hold_booking_seats(
    p_date DATE,
    p_slot VARCHAR(20),
    p_guests INT,
    p_max_capacity INT
) RETURNS INT AS $$
DECLARE
    current_booked INT;
BEGIN
    SELECT COALESCE(SUM(guest_count), 0) INTO current_booked
    FROM bookings
    WHERE visit_date = p_date 
      AND slot_id = p_slot 
      AND (status = 'PAID' OR (status = 'PENDING_PAYMENT' AND expires_at > NOW()));

    IF (current_booked + p_guests) > p_max_capacity THEN
        RAISE EXCEPTION 'Slot full. Available capacity: %', (p_max_capacity - current_booked);
    END IF;

    RETURN (p_max_capacity - current_booked - p_guests);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;