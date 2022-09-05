# Setup

### database driver postgres

- .env setup

```
DB_USERNAME=
DB_PASSWORD=
DB_PORT=
DB_NAME=
```

## Installation

### To use this backend, run sql create table.

```sql
-- public.post definition

-- Drop table

-- DROP TABLE public.post;

CREATE TABLE post (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	title varchar NULL,
	detail varchar NOT NULL,
	create_at varchar NOT NULL DEFAULT now(),
	CONSTRAINT post_pk PRIMARY KEY (id)
);
```

# Run

```
cd cmd
npx go-mon main.go
```
