CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password TEXT NOT NULL,
    create_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS carts (
    id BIGSERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users (id),
    total_price VARCHAR,
    number_of_item INTEGER,
    create_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS glasses (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    price_unit VARCHAR,
    num_in_storage INTEGER
);


CREATE TABLE IF NOT EXISTS cart_inside (
    id BIGSERIAL PRIMARY KEY,
    cart_id BIGINT REFERENCES carts (id),
    glasses_id INTEGER REFERENCES glasses (id),
    quantity INTEGER NOT NULL,
    total_price REAL NOT NULL
);


CREATE TABLE IF NOT EXISTS payments (
    id BIGSERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id),
    cart_id INTEGER REFERENCES carts (id),
    total_amount VARCHAR NOT NULL,
    create_at TIMESTAMP NOT NULL
);