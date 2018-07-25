CREATE TABLE ranked_songs(
	 rank INTEGER(10) NOT NULL,
	 artist VARCHAR(50) NOT NULL,
	 title VARCHAR(50) NOT NULL,
     release_year INTEGER(10) NOT NULL, 
	 raw_total DECIMAL(10,4) NOT NULL,
	 raw_usa DECIMAL(10,4) NOT NULL,
     raw_uk DECIMAL(10,4) NOT NULL,
     raw_eur DECIMAL(10,4) NOT NULL,
     raw_rest_of_world DECIMAL(10,4) NOT NULL
	);

CREATE TABLE ranked_albums(
	 rank INTEGER(10) NOT NULL,
	 artist VARCHAR(50) NOT NULL,
	 album VARCHAR(50) NOT NULL,
     release_year INTEGER(10) NOT NULL, 
	 raw_total DECIMAL(10,4) NOT NULL,
	 raw_usa DECIMAL(10,4) NOT NULL,
     raw_uk DECIMAL(10,4) NOT NULL,
     raw_eur DECIMAL(10,4) NOT NULL,
     raw_rest_of_world DECIMAL(10,4) NOT NULL
     );


SELECT a.release_year, a.artist, a.album, s.title as song_title
FROM ranked_songs s
LEFT JOIN ranked_albums a ON a.artist = s.artist and s.release_year = a.release_year
where a.artist = "led zeppelin";





SELECT d.department_id, d.department_name, d.over_head_costs, SUM(p.product_sales) as product_sales, SUM(p.product_sales) - d.over_head_costs as total_profit
FROM departments d
LEFT JOIN products p ON d.department_name = p.department_name
GROUP BY d.department_name, d.department_id, d.over_head_costs
ORDER BY d.department_id;