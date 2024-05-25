CREATE TABLE EntryVehicles (
    id INT PRIMARY KEY,
    license_plate VARCHAR(20) UNIQUE NOT NULL,
    size enum('small', 'medium', 'large') NOT NULL,
    entry_time TIMESTAMP,
    spot_id INT NULL,

    FOREIGN KEY (spot_id) REFERENCES ParkingSpots(spot_id)
);

CREATE TABLE ParkingSpots (
    id INT PRIMARY KEY,
    size enum('small', 'medium', 'large') NOT NULL,
    floor INT NOT NULL,
    vehicle_id INT,
    status enum('reserved', 'open') NOT NULL,

    FOREIGN KEY (vehicle_id) REFERENCES EntryVehicles(id)
);

CREATE TABLE Transactions (
    id INT PRIMARY KEY,
    vehicle_id INT,
    entry_time TIMESTAMP,
    exit_time TIMESTAMP,
    fee DECIMAL(10, 2),

    FOREIGN KEY (vehicle_id) REFERENCES EntryVehicles(id)
);
