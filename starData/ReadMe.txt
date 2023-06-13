This data was downloaded from https://cdsarc.cds.unistra.fr/ftp/cats/J/PASP/122/885/
================================================================================
J/PASP/122/885 Gliese catalog star/2MASS cross identifications (Stauffer+, 2010)
================================================================================
Accurate coordinates and 2MASS cross identifications for (almost) all
Gliese catalog star.
    Stauffer J., Tanner A.M., Bryden G., Ramirez S., Berriman B., Ciardi D.R.,
    Kane S.R., Mizusawa T., Payne A., Plavchan P., Von Braun K., Wyatt P.,
    Kirkpatrick J.D.
   <Publ. Astron. Soc. Pac., 122, 885-897 (2010)>
   =2010PASP..122..885S
================================================================================
ADC_Keywords: Stars, nearby ; Infrared sources ; Cross identifications ;
              Photometry, infrared

Abstract:
    We provide precise J2000/epoch 2000 coordinates and
    cross-identifications to sources in the 2MASS Point Source Catalog for
    nearly all stars in the Gliese, Gliese-Jahreiss, and Woolley catalogs
    of nearby stars. The only Gliese objects where we were not successful
    are two Gliese sources that are actually QSOs; two proposed companions
    to brighter stars, which we believe do not exist; four stars included
    in one of the catalogs but identified there as only optical
    companions; one probable plate flaw; and two stars that simply remain
    unrecovered. For the 4251 recovered stars, 2693 have coordinates based
    on Hipparcos positions, 1549 have coordinates based on 2MASS data, and
    9 have positions from other astrometric sources. All positions have
    been calculated at epoch 2000 using proper motions from the
    literature, which are also given here.

File Summary:
--------------------------------------------------------------------------------
 FileName   Lrecl  Records   Explanations
--------------------------------------------------------------------------------
ReadMe         80        .   This file
table1.dat    186     4106   Gliese Star Catalog
appen.dat      80      457   Individual notes
--------------------------------------------------------------------------------

See also:
    I/239 : The Hipparcos and Tycho Catalogues (ESA 1997)
   II/246 : 2MASS All-Sky Catalog of Point Sources (Cutri+ 2003)
    V/32  : Stars within 25 pc of the Sun (Woolley+ 1970)
    V/70  : Nearby Stars, Preliminary 3rd Version (Gliese+ 1991)

Byte-by-byte Description of file: table1.dat
--------------------------------------------------------------------------------
   Bytes Format Units     Label    Explanations
--------------------------------------------------------------------------------
   1- 21  A21   ---       Name     Name (1)
      22  A1    ---     f_Name     [*] GJ 4115 B actually GJ 4114 B in Simbad
  23- 35  A13   ---       OName    Other name (2)
  37- 38  I2    h         RAh      Right ascension (J2000)
  40- 41  I2    min       RAm      Right ascension (J2000)
  43- 47  F5.2  s         RAs      Right ascension (J2000)
      49  A1    ---       DE-      Declination sign (J2000)
  50- 51  I2    deg       DEd      Declination (J2000)
  53- 54  I2    arcmin    DEm      Declination (J2000)
  56- 59  F4.1  arcsec    DEs      Declination (J2000)
      61  A1    ---     l_pmRA     Limit flag on pmRA
  62- 67  F6.3 arcsec/yr  pmRA     Proper motion along RA
      69  A1    ---     l_pmDE     Limit flag on pmDE
  70- 75  F6.3 arcsec/yr  pmDE     Proper motion along DE
  77- 93  A17   ---       2MASS    2MASS name, JHHMMSSss+DDMMSSs
  95-100  F6.3  mag       Jmag     ? 2MASS J magnitude
 102-107  F6.3  mag       Hmag     ? 2MASS H magnitude
 109-114  F6.3  mag       Ksmag    ? 2MASS Ks magnitude
 116-122  A7    ---       Com      Comments (3)
 124-166  A43   ---       Source   Coordinate reference
 167-186  A20   ---       Note     Note
--------------------------------------------------------------------------------
Note (1): Names use the prefix:
   * Gl = from the Gliese (1969VeARI..22....1G) catalog
   * GJ = not in Gl69 (1969VeARI..22....1G) but present in
          GJ79 (1979A&AS...38..423G) or GJ91 (Cat. V/70)
   * Wo = not in any of Gl69 (1969VeARI..22....1G),
          GJ79 (1979A&AS...38..423G) or GJ91 GJ91 (Cat. V/70), but in
          Woolley et al. (1970ROAn....5....1W, Cat. V/32), GJ in Simbad
Note (2): Where a given star has two nearby star catalog names, the second
     name appears here. If there is no nearby star catalog name and a
     Hipparcos name is available, it is provided here
Note (3): Flags as follows:
      b = For stars with both Gliese and Woolley names, we give the
          Wo name here (and the Gl name in first column)
      c = Star is not in the GJ91 catalog
      d = Not listed as a member of a binary system in Gl69, GJ or Wo
          catalogs; binary companion identified subsequent to GJ91
      e = The secondary star is separated from the primary by less than 5"
          and HIP/2MASS positions are not available for both stars, so we
          list them as one line in this table
      f = GJ binary where 2MASS photometry is probably blended, most
          separations <5"
      g = Pleiades member (distance~133pc)
      h = See appendix for additional comments
--------------------------------------------------------------------------------

Byte-by-byte Description of file: appen.dat
--------------------------------------------------------------------------------
   Bytes Format Units   Label     Explanations
--------------------------------------------------------------------------------
   1- 16  A16   ---     Name      Name
  18- 80  A63   ---     Note      Note
--------------------------------------------------------------------------------

History:
  * 29-Apr-2011: From electronic version of the journal
  * 19-May-2011: GJ 4114 B retransformed into GJ 4115 B, as in original table
  * 19-Mar-2013: LHS 3293 corrected into LHS 3923 in table1
================================================================================
(End)                                      Patricia Vannier [CDS]    18-Mar-2011