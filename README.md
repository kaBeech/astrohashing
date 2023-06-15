# StarCrossed
A tool for finding a special spot in the universe

Created for the Deno [KV Hackaton](https://deno.com/blog/deno-kv-hackathon)

## About
StarCrossed is inspired by [this xkcd comic:](https://xkcd.com/201/)

![xkcd Christmas GPS comic](/public/xkcd_christmas_gps.png "Christmas GPS")

...but in space!

The basic idea is to input the birthdays of you and a loved one, and return a set of celestial coordinates special to the two of you

In addition to these coordinates, you'll also receive the name of the star closest to these coordinates (within 25 parsecs of Earth), a link to some more information about this star, and a link to an interactive map of the area your coordinates reside in

If the location is out of your starship's range, is too crowded when you get there, or isn't visible from your porch, fear not! Try entering in your birthdays in the reverse order - you'll get a different response this way

Have fun!

## Technical notes
The main route is a get request on `/star-crossings/:birthdays`, which returns StarCrossingData as JSON

The birthdays are expected to be in the following format: `yyyy-mm-dd,yyyy-mm-dd`

For example, a get request to http://localhost:8000/star-crossings/1960-1-1,1960-4-17 will return StarCrossingData

The only other route currently implemented is `/star-catalog`, which lists all the stars loaded into KV

A frontend demo is available at https://www.kabeech.com/fun/star-crossed/. However, the birthdays are currently hard-coded. I'll implement a form with date-pickers that can be used to hit the API for custom birthdays soon. For now I need to sleep

To start the server: `deno tasks dev` in the root directory

## Screenshots

Frontend Demo Screenshot 1: Frontend Demo Screenshot 1
![Frontend Demo Screenshot 1](/public/demoFrontendScreenshot1.png "Frontend Demo Screenshot 1")

Frontend Demo Screenshot 2: 
![Frontend Demo Screenshot 2](/public/demoFrontendScreenshot2.png "Frontend Demo Screenshot 1")

Demo Info Link (external website) Screenshot:
![Demo Info Link (external website) Screenshot](/public/demoInfoLink.png "Demo Info Link (external website) Screenshot]")


## Acknowledgements

Very special thanks goes out to [The Internet Stellar Database](http://www.stellar-database.com/), [skyMap.org](http://www.wikisky.org/?locale=EN), and [https://cdsarc.cds.unistra.fr/ftp/cats/J/PASP/122/885/](https://cdsarc.cds.unistra.fr/ftp/cats/J/PASP/122/885/)
