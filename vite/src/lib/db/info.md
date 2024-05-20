## cleaned rtf labels example

Label: State FIPSCode
SASVariable Name: _STATE

Label: Geographic Stratum Code
SASVariable Name: _GEOSTR

Label: Household Density Stratum Code
SASVariable Name: _DENSTR2

Label: Pre Call Status Code
SASVariable Name: PRECALL

Label: Secondary Screening Flags
SASVariable Name: SECSCRFL
...



## shapes

```bash
>>> ohbrfss19.csv:
Float64 Columns (length): 556
Int64 Columns: ['IDATE', 'IMONTH', 'IDAY', 'IYEAR', 'INTVID', 'SEQNO', 'HISPANC3', 'ZIPCODE1', 'ORGSEQNO']
O Columns: ['MRACE1', 'CPCOUNTY', 'MRACORG1']
Shape: (13536, 568)

>>> ohbrfss18.csv:
Float64 Columns (length): 492
Int64 Columns: ['IDATE', 'IMONTH', 'IDAY', 'IYEAR', 'INTVID', 'SEQNO', 'HISPANC3', 'MRACE1', 'ZIPCODE1', 'ORGSEQNO', 'MRACORG1']
O Columns: ['CATI_RN', 'CPCOUNTY']
Shape: (12763, 505)

>>> ohbrfss20.csv:
Float64 Columns (length): 517
Int64 Columns: ['IDATE', 'IMONTH', 'IDAY', 'IYEAR', 'INTVID', 'SEQNO', 'HISPANC3', 'MRACE1', 'ZIPCODE1', 'ORGSEQNO', 'MRACORG1']
O Columns: ['CATI_RN', 'CPCOUNTY']
Shape: (14676, 530)

>>> ohbrfss21.csv:
Float64 Columns (length): 536
Int64 Columns: ['IDATE', 'IMONTH', 'IDAY', 'IYEAR', 'INTVID', 'SEQNO', 'HISPANC3', 'MRACE1', 'ZIPCODE1', 'ORGSEQNO', 'MRACORG1']
O Columns: ['CPCOUNTY']
Shape: (14304, 548)

>>> ohbrfss22.csv:
Float64 Columns (length): 564
Int64 Columns: ['IDATE', 'IMONTH', 'IDAY', 'IYEAR', 'INTVID', 'SEQNO', 'MRACE2', 'MRACORG2']
O Columns: ['TYPEWORK', 'TYPEINDS', 'CPCOUNTY', 'STATEQUE', 'ORGSEQNO']
Shape: (16487, 577)

>>> ohbrfss13.csv:
Float64 Columns (length): 568
Int64 Columns: ['IDATE', 'IMONTH', 'IDAY', 'IYEAR', 'HISPANC3', 'MRACE1', 'ORGSEQNO', 'MRACORG1']
O Columns: ['INTVID', 'DLYOTHER', 'EXACTOT1', 'EXACTOT2', 'CPCOUNTY', 'TYPOTHER', 'RHFEROTH']
Shape: (11972, 583)

>>> ohbrfss12.csv:
Float64 Columns (length): 577
Int64 Columns: ['IDATE', 'IMONTH', 'IDAY', 'IYEAR', 'MRACE', 'MRACEORG']
O Columns: ['INTVID', 'CPCOUNTY']
Shape: (13026, 585)

>>> ohbrfss11.csv:
Float64 Columns (length): 604
Int64 Columns: ['IDATE', 'IMONTH', 'IDAY', 'IYEAR', 'MRACE', 'ORGSEQNO', 'MRACEORG']
O Columns: ['INTVID', 'CPCOUNTY', 'EXACTOT1', 'EXACTOT2']
Shape: (9948, 615)

>>> ohbrfss15.csv:
Float64 Columns (length): 547
Int64 Columns: ['IDATE', 'IMONTH', 'IDAY', 'IYEAR', 'HISPANC3', 'MRACE1', 'ZIPCODE', 'ORGSEQNO', 'MRACORG1']
O Columns: ['INTVID', 'CPCOUNTY', 'EXACTOT1', 'EXACTOT2']
Shape: (11929, 560)

>>> ohbrfss14.csv:
Float64 Columns (length): 534
Int64 Columns: ['IDATE', 'IMONTH', 'IDAY', 'IYEAR', 'HISPANC3', 'MRACE1', 'ORGSEQNO', 'MRACORG1']
O Columns: ['INTVID', 'DLYOTHER', 'CPCOUNTY']
Shape: (10933, 545)

>>> ohbrfss16.csv:
Float64 Columns (length): 509
Int64 Columns: ['IDATE', 'IMONTH', 'IDAY', 'IYEAR', 'SEQNO', 'HISPANC3', 'MRACE1', 'ORGSEQNO', 'MRACORG1']
O Columns: ['INTVID', 'CPCOUNTY']
Shape: (12389, 520)

>>> ohbrfss17.csv:
Float64 Columns (length): 569
Int64 Columns: ['IDATE', 'IMONTH', 'IDAY', 'IYEAR', 'HISPANC3', 'MRACE1', 'ZIPCODE1', 'ORGSEQNO', 'MRACORG1']
O Columns: ['INTVID', 'CPCOUNTY']
Shape: (12289, 580)

```