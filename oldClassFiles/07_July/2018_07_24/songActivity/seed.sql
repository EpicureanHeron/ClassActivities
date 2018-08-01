
INSERT INTO ranked_songs(rank, artist, release_year, title, world_score)
VALUES(1,  "Bing Crosby", 1942, "White Christmas", 39.903)
,(2,  "Bill Haley & his Comets", 1955, "Rock Around the Clock", 36.503)
, (3, "Celine Dion", 1998, "My Heart Will Go On",35.405);

select * from ranked_songs where artist = "Bing Crosby";