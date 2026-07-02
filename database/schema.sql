CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT,
    bio TEXT,
    views INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS links (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    icon TEXT,
    position INTEGER DEFAULT 0,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS themes (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    background_type TEXT DEFAULT 'color',
    background_value TEXT,
    primary_color TEXT DEFAULT '#ffffff',
    font TEXT DEFAULT 'sans-serif',
    FOREIGN KEY(user_id) REFERENCES users(id)
);
