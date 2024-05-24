CREATE TABLE Vehicles (
    vehicle_id SERIAL PRIMARY KEY,
    license_plate VARCHAR(20) UNIQUE NOT NULL,
    size VARCHAR(10) NOT NULL,
    entry_time TIMESTAMP,
    exit_time TIMESTAMP,
    assigned_spot INT
);

CREATE TABLE ParkingSpots (
    spot_id SERIAL PRIMARY KEY,
    size VARCHAR(10) NOT NULL,
    floor INT NOT NULL,
    vehicle_id INT,
    FOREIGN KEY (vehicle_id) REFERENCES Vehicles(vehicle_id)
);

CREATE TABLE Transactions (
    transaction_id SERIAL PRIMARY KEY,
    vehicle_id INT,
    entry_time TIMESTAMP,
    exit_time TIMESTAMP,
    fee DECIMAL(10, 2),
    FOREIGN KEY (vehicle_id) REFERENCES Vehicles(vehicle_id)
);
