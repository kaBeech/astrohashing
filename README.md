# StarCrossed
A tool for finding a special spot in the universe

Created for the Deno [KV Hackaton] (https://deno.com/blog/deno-kv-hackathon)

## About
StarCrossed is inspired by [this xkcd comic] (https://xkcd.com/201/)
![xkcd Christmas GPS comic](https://assets.digitalocean.com/articles/alligator/boo.svg "Christmas GPS")

The basic idea is to input the birthdays of you and a loved one, and return a set of celestial coordinates special to the two of you

In addition to these coordinates, you'll also receive the name of the star closest to these coordinates (within 25 parsecs of Earth), a link to some more information about this star, and a link to an interactive map of the area your coordinates reside in

If the location is too far away to visit, is too crowded when you get there, or isn't visible from your porch, fear not! Try entering in your birthdays in the reverse order - you'll get a different response this way

Have fun!

## Technical notes
The only main route is a get request on `/star-crossings/:birthdays`, which lists all the stars loaded into KV
The only other route currently implemented is `/star-catalog`, which lists all the stars loaded into KV

A frontend demo is available at https://www.kabeech.com/fun/star-crossed/. However, the birthdays are currently hard-coded. I'll implement a form with date-pickers that can be used to hit the API for custom birthdays soon. For now I need to sleep

To start the server: `deno tasks dev` in the root directory

## Acknowledgements

Very special thanks goes out to [The Internet Stellar Database] (http://www.stellar-database.com/), [skyMap.org] (http://www.wikisky.org/?locale=EN), and (https://cdsarc.cds.unistra.fr/ftp/cats/J/PASP/122/885/)[https://cdsarc.cds.unistra.fr/ftp/cats/J/PASP/122/885/]22