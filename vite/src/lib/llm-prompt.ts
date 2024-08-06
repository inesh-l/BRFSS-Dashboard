export const systemPrompt = `System Prompt: You are a data scientist with the following information about a dataset, including SAS variable names, labels and a table of possible values. There is no actual data here. There may be some notes in between values. I am going to ask questions about the dataset. Please give me some relevant variables to my question, along with steps to find an answer to my question. Do not expect a follow up message after each prompt. 

Label: State FIPS Code
Type of Variable: Num
SAS Variable Name: _STATE
Value|Value Label|Frequency|Percentage|Weighted Percentage|
39|Ohio|16,487|100.00|100.00|

Label: Geographic Stratum Code
Type of Variable: Num
SAS Variable Name: _GEOSTR
Value|Value Label|Frequency|Percentage|Weighted Percentage|
HIDDEN|Data not displayed
Notes: Due to the nature of the data or the size of the table for display, this information is not printed for this report|16,487|100.00|100.00|

Label: Household Density Stratum Code
Type of Variable: Num
SAS Variable Name: _DENSTR2
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Listed|12,043|73.05|68.18|
2|Unlisted|4,439|26.92|31.73|
9|Not Applicable|5|0.03|0.09|

Label: Pre-Call Status Code
Type of Variable: Num
SAS Variable Name: PRECALL
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|To be called|16,422|99.61|99.50|
7|To be called|65|0.39|0.50|

Label: Secondary Screening Flags
Type of Variable: Num
SAS Variable Name: SECSCRFL
Value|Value Label|Frequency|Percentage|Weighted Percentage|
0|Undetermined/Residential|1|0.03|0.19|
1|No Answer|296|9.46|11.48|
2|Busy|3|0.10|0.04|
5|Privacy Manager|34|1.09|1.73|
6|Residential Voice Mail|5|0.16|0.14|
7|Residence/Phone Answered|2,790|89.17|86.42|
BLANK|Missing or Not Used|13,358|.|.|

Label: Replicate Number
Type of Variable: Num
SAS Variable Name: REPNUM
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|010001-019999|778|4.72|5.03|
2|020001-029999|598|3.63|3.71|
3|030001-039999|1,209|7.33|7.63|
4|040001-049999|933|5.66|5.32|
5|050001-059999|864|5.24|5.56|
6|060001-069999|1,649|10.00|9.29|
7|070001-079999|1,669|10.12|10.87|
8|080001-089999|2,112|12.81|12.11|
9|090001-099999|1,994|12.09|11.86|
10|100001-109999|1,522|9.23|8.97|
11|110001-119999|1,642|9.96|10.11|
12|120001-129999|1,517|9.20|9.53|

Label: Replicate Depth
Type of Variable: Num
SAS Variable Name: REPDEPTH
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Replicate Depth|569|3.45|3.30|
2||540|3.28|3.26|
3||528|3.20|3.45|
4||524|3.18|3.01|
5||577|3.50|3.61|
6||554|3.36|3.19|
7||595|3.61|3.49|
8||553|3.35|3.24|
9||602|3.65|3.52|
10||561|3.40|3.41|
11||524|3.18|2.95|
12||523|3.17|3.37|
13||579|3.51|3.24|
14||541|3.28|3.18|
15||567|3.44|3.45|
16||571|3.46|3.66|
17||581|3.52|3.49|
18||540|3.28|3.21|
19||555|3.37|3.42|
20||505|3.06|3.07|
21||560|3.40|3.23|
22||534|3.24|3.36|
23||509|3.09|3.21|
24||540|3.28|3.16|
25||572|3.47|3.46|
26||510|3.09|3.11|
27||546|3.31|3.81|
28||553|3.35|3.40|
29||537|3.26|3.44|
30||537|3.26|3.27|

Label: File Month
Type of Variable: Num
SAS Variable Name: FMONTH
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|January|778|4.72|5.03|
2|February|598|3.63|3.71|
3|March|1,209|7.33|7.63|
4|April|933|5.66|5.32|
5|May|864|5.24|5.56|
6|June|1,649|10.00|9.29|
7|July|1,669|10.12|10.87|
8|August|2,112|12.81|12.11|
9|September|1,994|12.09|11.86|
10|October|1,522|9.23|8.97|
11|November|1,642|9.96|10.11|
12|December|1,517|9.20|9.53|

Label: Interview Date
Type of Variable: Char
SAS Variable Name: IDATE
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|01012022-01312022|22|0.13|0.17|
2|02012022-02292022|824|5.00|5.15|
3|03012022-03312022|1,146|6.95|6.87|
4|04012022-04302022|1,127|6.84|7.05|
5|05012022-05312022|1,225|7.43|7.70|
6|06012022-06302022|1,573|9.54|8.94|
7|07012022-07312022|1,329|8.06|8.34|
8|08012022-08312022|2,093|12.69|12.28|
9|09012022-09302022|1,772|10.75|10.53|
10|10012022-10312022|1,458|8.84|8.60|
11|11012022-11302022|1,317|7.99|8.05|
12|12012022-12312022|2,565|15.56|15.98|
13|Collected in 2023|36|0.22|0.33|

Label: Interview Month
Type of Variable: Char
SAS Variable Name: IMONTH
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|January|54|0.33|0.49|
2|February|828|5.02|5.16|
3|March|1,146|6.95|6.87|
4|April|1,127|6.84|7.05|
5|May|1,225|7.43|7.70|
6|June|1,573|9.54|8.94|
7|July|1,329|8.06|8.34|
8|August|2,093|12.69|12.28|
9|September|1,772|10.75|10.53|
10|October|1,458|8.84|8.60|
11|November|1,317|7.99|8.05|
12|December|2,565|15.56|15.98|

Label: Interview Day
Type of Variable: Char
SAS Variable Name: IDAY
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Interview Day|529|3.21|3.02|
2||432|2.62|2.72|
3||500|3.03|3.03|
4||401|2.43|2.62|
5||496|3.01|3.10|
6||597|3.62|3.52|
7||525|3.18|3.08|
8||520|3.15|3.26|
9||465|2.82|3.06|
10||450|2.73|2.78|
11||380|2.30|2.31|
12||421|2.55|2.47|
13||485|2.94|3.14|
14||539|3.27|3.52|
15||532|3.23|3.20|
16||600|3.64|3.96|
17||505|3.06|2.65|
18||554|3.36|2.94|
19||516|3.13|3.40|
20||563|3.41|3.41|
21||618|3.75|3.92|
22||690|4.19|4.14|
23||640|3.88|3.69|
24||496|3.01|2.87|
25||570|3.46|3.35|
26||601|3.65|3.70|
27||570|3.46|3.65|
28||720|4.37|4.47|
29||737|4.47|4.22|
30||567|3.44|3.30|
31||268|1.63|1.50|

Label: Interview Year
Type of Variable: Char
SAS Variable Name: IYEAR
Value|Value Label|Frequency|Percentage|Weighted Percentage|
2022|Interview Year|16,451|99.78|99.67|
2023||36|0.22|0.33|

Label: Interviewer Identification
Type of Variable: Char
SAS Variable Name: INTVID
Value|Value Label|Frequency|Percentage|Weighted Percentage|
HIDDEN|Data not displayed
Notes: Due to the nature of the data or the size of the table for display, this information is not printed for this report|16,487|100.00|100.00|

Label: Final Disposition
Type of Variable: Num
SAS Variable Name: DISPCODE
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1100|Completed Interview|10,567|64.09|61.39|
1200|Partial Complete Interview|5,920|35.91|38.61|

Label: Annual Sequence Number
Type of Variable: Char
SAS Variable Name: SEQNO
Value|Value Label|Frequency|Percentage|Weighted Percentage|
HIDDEN|Data not displayed|16,487|100.00|100.00|

Label: Primary Sampling Unit
Type of Variable: Num
SAS Variable Name: _PSU
Value|Value Label|Frequency|Percentage|Weighted Percentage|
HIDDEN|Data not displayed
Notes: Value should be unique for a state for a year. Due to the nature of the data or the size of the table for display, this information is not printed for this report|16,487|100.00|100.00|

Label: Number of Sample Records Selected from Stratum
Type of Variable: Num
SAS Variable Name: NRECSEL
Value|Value Label|Frequency|Percentage|Weighted Percentage|
HIDDEN|Data not displayed
Notes: Due to the nature of the data or the size of the table for display, this information is not printed for this report|16,487|100.00|100.00|

Label: Number of Telephone Numbers in Stratum from Which Sample Was Selected
Type of Variable: Num
SAS Variable Name: NRECSTR
Value|Value Label|Frequency|Percentage|Weighted Percentage|
HIDDEN|Data not displayed
Notes: Due to the nature of the data or the size of the table for display, this information is not printed for this report|16,487|100.00|100.00|

Label: Correct telephone number?
Type of Variable: Num
SAS Variable Name: CTELENM1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|YesGo to LL.02, PVTRESD1|3,128|100.00|100.00|
BLANK|Missing
Notes: QSTVER > = 20|13,359|.|.|

Label: Private Residence?
Type of Variable: Num
SAS Variable Name: PVTRESD1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|YesGo to LL.04, STATERE1|3,127|99.97|99.98|
2|NoGo to LL.03, COLGHOUS|1|0.03|0.02|
BLANK|Missing
Notes: QSTVER >= 20|13,359|.|.|

Label: Do you live in college housing?
Type of Variable: Num
SAS Variable Name: COLGHOUS
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|YesGo to LL.04, STATERE1|1|100.00|100.00|
BLANK|Missing
Notes: QSTVER >= 20; or LL.02, PVTRESD1, is coded 1|16,486|.|.|

Label: Resident of State
Type of Variable: Num
SAS Variable Name: STATERE1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|YesGo to LL.05, CELPHON1|3,128|100.00|100.00|
BLANK|Not asked or Missing
Notes: QSTVER >= 20|13,359|.|.|

Label: Cellular Telephone
Type of Variable: Num
SAS Variable Name: CELPHON1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
2|Not a cell phoneGo to LL.06, LADULT1|3,128|100.00|100.00|
BLANK|Missing of Cell Phone Interveiw
Notes: QSTVER >= 20|13,359|.|.|

Label: Are you 18 years of age or older?
Type of Variable: Num
SAS Variable Name: LADULT1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|YesIf LL.03, COLGHOUS, is 1 go to LL.07, COLGSEX1; else go to LL.08, NUMADULT|3,128|100.00|100.00|
BLANK|Not asked or Missing
Notes: QSTVER >= 20|13,359|.|.|

Label: Are you male or female?
Type of Variable: Num
SAS Variable Name: COLGSEX1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
2|FemaleGo to Section 01.01 GENHLTH|1|100.00|100.00|
BLANK|Not asked or Missing
Notes: QSTVER >= 20; or if LL.03, COLGHOUS, is not coded 1|16,486|.|.|

Label: Number of Adults in Household
Type of Variable: Num
SAS Variable Name: NUMADULT
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Number of adults in the householdGo to LL.09, LANDSEX1|1,627|52.03|38.17|
2|Number of adults in the householdGo to LL.10, NUMMEN|1,237|39.56|44.75|
3|Number of adults in the householdGo to LL.10, NUMMEN|198|6.33|12.14|
4|Number of adults in the householdGo to LL.10, NUMMEN|58|1.85|4.34|
5|Number of adults in the householdGo to LL.10, NUMMEN|6|0.19|0.48|
6 - 99|6 or moreGo to LL.10, NUMMEN|1|0.03|0.12|
BLANK|Missing
Notes: QSTVER >= 20|13,360|.|.|

Label: Are you male or female?
Type of Variable: Num
SAS Variable Name: LANDSEX1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|MaleGo to C01.01, GENHLTH|533|32.76|30.94|
2|FemaleGo to C01.01, GENHLTH|1,093|67.18|68.42|
3|NonbinaryInsert Sex at Birth module or Terminate Phone Call|1|0.06|0.64|
BLANK|Not asked or Missing
Notes: QSTVER >= 20; or if LL.08, NUMADULT, is greater than 1|14,860|.|.|

Label: Number of Adult men in Household
Type of Variable: Num
SAS Variable Name: NUMMEN
Value|Value Label|Frequency|Percentage|Weighted Percentage|
0|Number of adult men in the household|70|4.67|4.90|
1|Number of adult men in the household|1,231|82.07|75.05|
2|Number of adult men in the household|182|12.13|18.20|
3|Number of adult men in the household|15|1.00|1.61|
4|Number of adult men in the household|2|0.13|0.24|
BLANK|Missing
Notes: QSTVER >= 20; or if LL.08, NUMADULT, is equal to 1|14,987|.|.|

Label: Number of Adult women in Household
Type of Variable: Num
SAS Variable Name: NUMWOMEN
Value|Value Label|Frequency|Percentage|Weighted Percentage|
0|Number of adult women in the household|44|2.93|4.01|
1|Number of adult women in the household|1,243|82.87|74.27|
2|Number of adult women in the household|191|12.73|19.49|
3|Number of adult women in the household|18|1.20|1.88|
4|Number of adult women in the household|2|0.13|0.23|
6 - 99|6 or more|2|0.13|0.12|
BLANK|Missing
Notes: QSTVER >= 20; or if LL.08, NUMADULT, is equal to 1|14,987|.|.|

Label: Respondent selection
Type of Variable: Num
SAS Variable Name: RESPSLCT
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|MaleGo to Section 01.01 GENHLTH|641|42.73|43.30|
2|FemaleGo to Section 01.01 GENHLTH|859|57.27|56.70|
BLANK|Not asked or Missing
Notes: QSTVER >= 20; or if LL.08, NUMADULT, is equal to 1|14,987|.|.|

Label: Safe time to talk
Type of Variable: Num
SAS Variable Name: SAFETIME
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|YesGo to CP.02, CTELNUM1|13,359|100.00|100.00|
BLANK|Not asked or Missing
Notes: QSTVER < 20|3,128|.|.|

Label: Correct Phone Number?
Type of Variable: Num
SAS Variable Name: CTELNUM1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|YesGo to CP.03, CELLFON5|13,359|100.00|100.00|
BLANK|Not asked or Missing
Notes: QSTVER < = 20|3,128|.|.|

Label: Is this a cell phone?
Type of Variable: Num
SAS Variable Name: CELLFON5
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|YesGo to CP.04, CADULT1|13,359|100.00|100.00|
BLANK|Not asked or Missing
Notes: QSTVER < 20|3,128|.|.|

Label: Are you 18 years of age or older?
Type of Variable: Num
SAS Variable Name: CADULT1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|YesGo to CP.05, CELLSEX1|13,359|100.00|100.00|
BLANK|Not asked or Missing
Notes: QSTVER < 20|3,128|.|.|

Label: Are you male or female?
Type of Variable: Num
SAS Variable Name: CELLSEX1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|MaleGo to CP.06, PVTRESD3|6,537|48.93|49.70|
2|FemaleGo to CP.06, PVTRESD3|6,777|50.73|49.83|
3|NonbinaryInsert Sex at Birth module or Terminate Phone Call|23|0.17|0.24|
7|Dont know/Not SureInsert Sex at Birth module or Terminate Phone Call|8|0.06|0.10|
9|RefusedInsert Sex at Birth module or Terminate Phone Call|14|0.10|0.13|
BLANK|Not asked or Missing
Notes: QSTVER < 20|3,128|.|.|

Label: Do you live in a private residence?
Type of Variable: Num
SAS Variable Name: PVTRESD3
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|YesGo to CP.08, CSTATE1|13,314|99.66|99.36|
2|NoGo to CP.07 CCLGHOUS|45|0.34|0.64|
BLANK|Not asked or Missing
Notes: QSTVER < 20|3,128|.|.|

Label: Do you live in college housing?
Type of Variable: Num
SAS Variable Name: CCLGHOUS
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|YesGo to CP.08, CSTATE1|45|100.00|100.00|
BLANK|Missing
Notes: QSTVER < 20; or CP.06, PVTRESD3, is coded 1|16,442|.|.|

Label: Do you currently live in  ____(state)____?
Type of Variable: Num
SAS Variable Name: CSTATE1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|YesGo to CP.10, LANDLINE|12,915|96.68|94.62|
2|NoGo to CP.09, RSPSTAT1|444|3.32|5.38|
BLANK|Not asked or Missing
Notes: QSTVER < 20|3,128|.|.|

Label: In what state do you currently live?
Type of Variable: Num
SAS Variable Name: RSPSTAT1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
39|Ohio|434|100.00|100.00|
BLANK|Not asked or Missing
Notes: QSTVER < 20; or CP.08, CSTATE1, is coded 1|16,053|.|.|

Label: Do you also have a landline telephone?
Type of Variable: Num
SAS Variable Name: LANDLINE
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|2,776|20.78|29.52|
2|No|10,530|78.82|70.10|
7|Dont know/Not sure|28|0.21|0.26|
9|Refused|25|0.19|0.12|
BLANK|Not asked or Missing
Notes: QSTVER < 20; or RSPSTAT1=77 or 99|3,128|.|.|

Label: Number of Adults in Household
Type of Variable: Num
SAS Variable Name: HHADULT
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1 - 76|Number of adults|13,278|99.39|99.35|
77|Dont know/Not sure|8|0.06|0.09|
99|Refused|73|0.55|0.56|
BLANK|Not asked or Missing
Notes: QSTVER < 20; or RSPSTAT1=77 or 99|3,128|.|.|

Label: Sex of Respondent
Type of Variable: Num
SAS Variable Name: SEXVAR
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|MaleCode=1 if LANDSEX1=1 or CELLSEX1=1 or COLGSEX1=1|7,737|46.93|48.67|
2|FemaleCode=2 if LANDSEX1=2 or CELLSEX1=2 or COLGSEX1=2|8,750|53.07|51.33|

Label: General Health
Type of Variable: Num
SAS Variable Name: GENHLTH
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Excellent|2,305|13.98|15.91|
2|Very good|5,459|33.11|32.93|
3|Good|5,334|32.35|32.32|
4|Fair|2,532|15.36|14.15|
5|Poor|824|5.00|4.51|
7|Dont know/Not Sure|22|0.13|0.11|
9|Refused|11|0.07|0.07|

Label: Number of Days Physical Health Not Good
Type of Variable: Num
SAS Variable Name: PHYSHLTH
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1 - 30|Number of days|6,436|39.04|38.49|
88|None|9,530|57.80|58.38|
77|Dont know/Not sure|422|2.56|2.58|
99|Refused|99|0.60|0.55|

Label: Number of Days Mental Health Not Good
Type of Variable: Num
SAS Variable Name: MENTHLTH
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1 - 30|Number of days
Notes: _ _ Number of days|6,625|40.18|44.74|
88|None|9,405|57.04|52.60|
77|Dont know/Not sure|355|2.15|2.07|
99|Refused|102|0.62|0.59|

Label: Poor Physical or Mental Health
Type of Variable: Num
SAS Variable Name: POORHLTH
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1 - 30|Number of days
Notes: _ _ Number of days|4,621|47.12|49.37|
88|None|4,786|48.81|47.03|
77|Dont know/Not sure|330|3.37|2.93|
99|Refused|69|0.70|0.66|
BLANK|Not asked or Missing
Notes: Section 02.01, PHYSHLTH, is 88 and Section 2.02, MENTHLTH, is 88|6,681|.|.|

Label: What is Primary Source of Health Insurance?
Type of Variable: Num
SAS Variable Name: PRIMINSR
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|A plan purchased through an employer or union (including plans purchased through another person´s employer)|6,083|36.90|40.07|
2|A private nongovernmental plan that you or another family member buys on your own|1,311|7.95|9.03|
3|Medicare|5,238|31.77|22.90|
4|Medigap|8|0.05|0.04|
5|Medicaid|1,287|7.81|9.28|
6|Children´s Health Insurance Program (CHIP)|3|0.02|0.02|
7|Military related health care: TRICARE (CHAMPUS) / VA health care / CHAMP- VA|462|2.80|2.59|
8|Indian Health Service|4|0.02|0.03|
9|State sponsored health plan|288|1.75|2.24|
10|Other government program|505|3.06|3.66|
88|No coverage of any type|628|3.81|5.39|
77|Dont know/Not Sure|351|2.13|2.92|
99|Refused|319|1.93|1.82|

Label: Have Personal Health Care Provider?
Type of Variable: Num
SAS Variable Name: PERSDOC3
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes, only one|9,285|56.32|54.25|
2|More than one|5,333|32.35|30.39|
3|No|1,731|10.50|14.42|
7|Dont know/Not Sure|96|0.58|0.65|
9|Refused|42|0.25|0.29|

Label: Could Not Afford To See Doctor
Type of Variable: Num
SAS Variable Name: MEDCOST1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|1,244|7.55|9.76|
2|No|15,177|92.05|89.81|
7|Dont know/Not sure|54|0.33|0.33|
9|Refused|12|0.07|0.10|

Label: Length of time since last routine checkup
Type of Variable: Num
SAS Variable Name: CHECKUP1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Within past year (anytime less than 12 months ago)|13,439|81.51|77.35|
2|Within past 2 years (1 year but less than 2 years ago)|1,270|7.70|9.59|
3|Within past 5 years (2 years but less than 5 years ago)|720|4.37|5.53|
4|5 or more years ago|772|4.68|5.41|
7|Dont know/Not sure|181|1.10|1.26|
8|Never|81|0.49|0.70|
9|Refused|24|0.15|0.17|

Label: Exercise in Past 30 Days
Type of Variable: Num
SAS Variable Name: EXERANY2
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|11,998|72.77|74.64|
2|No|4,434|26.89|25.06|
7|Dont know/Not Sure|35|0.21|0.20|
9|Refused|20|0.12|0.10|

Label: How Much Time Do You Sleep
Type of Variable: Num
SAS Variable Name: SLEPTIM1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1 - 24|Number of hours [1-24]|16,269|98.68|98.81|
77|Dont know/Not Sure|177|1.07|0.98|
99|Refused|41|0.25|0.22|

Label: Last Visited Dentist or Dental Clinic
Type of Variable: Num
SAS Variable Name: LASTDEN4
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Within the past year (anytime < 12 months ago)|10,744|65.17|63.49|
2|Within the past 2 years (1 year but < 2 years ago)|1,747|10.60|11.51|
3|Within the past 5 years (2 years but < 5 years ago)|1,697|10.29|10.96|
4|5 or more years ago|1,987|12.05|11.81|
7|Dont know/Not sure|205|1.24|1.28|
8|Never|83|0.50|0.87|
9|Refused|23|0.14|0.08|
BLANK|Missing|1|.|.|

Label: Number of Permanent Teeth Removed
Type of Variable: Num
SAS Variable Name: RMVTETH4
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|1 to 5|4,808|29.16|27.27|
2|6 or more, but not all|1,878|11.39|9.52|
3|All|1,364|8.27|6.74|
7|Dont know/Not sure|339|2.06|1.93|
8|None|8,056|48.87|54.33|
9|Refused|41|0.25|0.20|
BLANK|Not asked or Missing|1|.|.|

Label: Ever Diagnosed with Heart Attack
Type of Variable: Num
SAS Variable Name: CVDINFR4
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|1,136|6.89|5.32|
2|No|15,258|92.55|93.99|
7|Dont know/Not sure|82|0.50|0.63|
9|Refused|11|0.07|0.05|

Label: Ever Diagnosed with Angina or Coronary Heart Disease
Type of Variable: Num
SAS Variable Name: CVDCRHD4
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|1,221|7.41|5.57|
2|No|15,096|91.56|93.57|
7|Dont know/Not sure|159|0.96|0.82|
9|Refused|11|0.07|0.04|

Label: Ever Diagnosed with a Stroke
Type of Variable: Num
SAS Variable Name: CVDSTRK3
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|843|5.11|4.29|
2|No|15,569|94.43|95.32|
7|Dont know/Not sure|66|0.40|0.36|
9|Refused|9|0.05|0.03|

Label: Ever Told Had Asthma
Type of Variable: Num
SAS Variable Name: ASTHMA3
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|2,470|14.98|16.04|
2|NoGo to Section 07.06 CHCSCNC1|13,969|84.73|83.64|
7|Dont know/Not SureGo to Section 07.06 CHCSCNC1|40|0.24|0.30|
9|RefusedGo to Section 07.06 CHCSCNC1|8|0.05|0.03|

Label: Still Have Asthma
Type of Variable: Num
SAS Variable Name: ASTHNOW
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|1,762|71.34|70.34|
2|No|632|25.59|25.97|
7|Dont know/Not Sure|74|3.00|3.66|
9|Refused|2|0.08|0.03|
BLANK|Not asked or Missing
Notes: Section 07.04, ASTHMA3 is coded 2, 7, 9, or Missing|14,017|.|.|

Label: (Ever told) (you had) skin cancer that is not melanoma?
Type of Variable: Num
SAS Variable Name: CHCSCNC1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|1,286|7.80|5.48|
2|No|15,074|91.43|93.91|
7|Dont know / Not sure|115|0.70|0.57|
9|Refused|12|0.07|0.05|

Label: (Ever told) (you had)  melanoma or any other types of cancer?
Type of Variable: Num
SAS Variable Name: CHCOCNC1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|1,942|11.78|9.07|
2|No|14,460|87.71|90.47|
7|Dont know / Not sure|73|0.44|0.41|
9|Refused|12|0.07|0.04|

Label: Ever told you had C.O.P.D. emphysema or chronic bronchitis?
Type of Variable: Num
SAS Variable Name: CHCCOPD3
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|1,827|11.08|9.41|
2|No|14,584|88.46|90.05|
7|Dont know / Not sure|62|0.38|0.46|
9|Refused|14|0.08|0.07|

Label: (Ever told) you had a depressive disorder
Type of Variable: Num
SAS Variable Name: ADDEPEV3
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|3,889|23.59|24.87|
2|No|12,481|75.70|74.50|
7|Dont know/Not sure|89|0.54|0.51|
9|Refused|28|0.17|0.12|

Label: Ever told you have kidney disease?
Type of Variable: Num
SAS Variable Name: CHCKDNY2
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|926|5.62|4.64|
2|No|15,468|93.82|94.82|
7|Dont know / Not sure|83|0.50|0.49|
9|Refused|10|0.06|0.05|

Label: Told Had Arthritis
Type of Variable: Num
SAS Variable Name: HAVARTH4
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|6,308|38.26|31.15|
2|No|10,074|61.10|68.24|
7|Dont know/Not Sure|95|0.58|0.58|
9|Refused|10|0.06|0.03|

Label: (Ever told) you had diabetes
Type of Variable: Num
SAS Variable Name: DIABETE4
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|2,692|16.33|13.03|
2|Yes, but female told only during pregnancyGo to Section 08.01 AGE|121|0.73|0.75|
3|NoGo to Section 08.01 AGE|13,278|80.54|83.96|
4|No, pre-diabetes or borderline diabetesGo to Section 08.01 AGE|360|2.18|2.06|
7|Dont know/Not SureGo to Section 08.01 AGE|27|0.16|0.16|
9|RefusedGo to Section 08.01 AGE|9|0.05|0.04|

Label: Reported Age in Years
Type of Variable: Num
SAS Variable Name: AGE
Value|Value Label|Frequency|Percentage|Weighted Percentage|
7|Dont know/Not sure|19|0.12|0.09|
9|Refused|289|1.75|1.62|
18 - 24|Age 18 - 24
Notes: _ _ Code age in years|913|5.54|11.65|
25 - 34|Age 25 - 34|1,677|10.17|16.51|
35 - 44|Age 35 - 44|2,081|12.62|15.48|
45 - 54|Age 45 - 54|2,472|14.99|13.80|
55 - 64|Age 55 - 64|3,178|19.28|16.74|
65 - 99|Age 65 or older|5,858|35.53|24.10|

Label: Hispanic, Latino/a, or Spanish origin?
Type of Variable: Char
SAS Variable Name: HISPANC3
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Mexican, Mexican American, Chicano/a|170|1.03|1.42|
2|Puerto Rican|76|0.46|0.88|
3|Cuban|9|0.05|0.07|
4|Another Hispanic, Latino/a, or Spanish origin|154|0.93|1.54|
5|No|15,944|96.71|95.10|
6|Multiple responses, Note: 6 is a value created for codebook, it is not in the survey|9|0.05|0.12|
7|Dont know/Not Sure|37|0.22|0.35|
9|Refused|87|0.53|0.51|
BLANK|Not asked or Missing|1|.|.|

Label: Multiple Race
Type of Variable: Char
SAS Variable Name: MRACE2
Value|Value Label|Frequency|Percentage|Weighted Percentage|
77|Dont know/Not Sure|59|0.36|0.41|
99|Refused|205|1.24|1.21|
HIDDEN|Data not displayed
Notes: Due to the nature of the data or the size of the table for display, this information is not printed for this report|16,223|98.40|98.38|

Label: Respondent Race Choice
Type of Variable: Num
SAS Variable Name: ORACE4
Value|Value Label|Frequency|Percentage|Weighted Percentage|
10|White|148|50.34|49.59|
20|Black or African American|57|19.39|22.36|
30|American Indian or Alaska Native|34|11.56|8.93|
41|Asian Indian|4|1.36|1.90|
42|Chinese|2|0.68|0.47|
43|Filipino|3|1.02|0.83|
44|Japanese|1|0.34|0.15|
46|Vietnamese|1|0.34|0.15|
47|Other Asian|3|1.02|2.21|
51|Native Hawaiian|3|1.02|1.37|
88||1|0.34|0.10|
77|Don´t know/Not Sure|18|6.12|5.44|
99|Refused|19|6.46|6.48|
BLANK|Not asked or Missing
Notes: Section 09.04, MRACE2,has only one valid race code (10-60); or if MRACE2 is coded 77 or 99|16,193|.|.|

Label: Marital Status
Type of Variable: Num
SAS Variable Name: MARITAL
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Married|8,300|50.34|48.61|
2|Divorced|2,340|14.19|11.02|
3|Widowed|1,998|12.12|7.95|
4|Separated|313|1.90|1.99|
5|Never married|2,845|17.26|25.21|
6|A member of an unmarried couple|534|3.24|4.26|
9|Refused|157|0.95|0.96|

Label: Education Level
Type of Variable: Num
SAS Variable Name: EDUCA
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Never attended school or only kindergarten|3|0.02|0.04|
2|Grades 1 through 8 (Elementary)|145|0.88|2.02|
3|Grades 9 through 11 (Some high school)|614|3.72|7.51|
4|Grade 12 or GED (High school graduate)|5,028|30.50|33.20|
5|College 1 year to 3 years (Some college or technical school)|4,706|28.54|29.89|
6|College 4 years or more (College graduate)|5,927|35.95|26.99|
9|Refused|64|0.39|0.35|

Label: Own or Rent Home
Type of Variable: Num
SAS Variable Name: RENTHOM1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Own|11,892|72.13|69.20|
2|Rent|3,674|22.28|23.43|
3|Other arrangement|764|4.63|6.18|
7|Dont know/Not Sure|42|0.25|0.46|
9|Refused|115|0.70|0.73|

Label: County Code
Type of Variable: Num
SAS Variable Name: CTYCODE2
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1 - 776|ANSI county code (formerly FIPS code)|15,475|93.86|91.46|
777|Dont know/Not sure|223|1.35|1.56|
888|County from another state (cell phone data only)|434|2.63|4.71|
999|Refused|355|2.15|2.26|

Label: Zipcode of residence
Type of Variable: Char
SAS Variable Name: ZIPCODE1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1 - 77776|Zipcode|15,222|92.34|90.96|
77777|Dont know/Not Sure|177|1.07|1.53|
99999|Refused|1,085|6.58|7.50|
BLANK|Not asked or Missing|3|.|.|

Label: Household Landline Telephones
Type of Variable: Num
SAS Variable Name: NUMHHOL4
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|186|5.95|4.89|
2|NoGo to Section 08.12 CPDEMO1C|2,926|93.54|94.44|
7|Dont know/Not sureGo to Section 08.12 CPDEMO1C|6|0.19|0.21|
9|RefusedGo to Section 08.12 CPDEMO1C|10|0.32|0.46|
BLANK|Not asked or Missing
Notes: QSTVER >= 20|13,359|.|.|

Label: Are You A Veteran
Type of Variable: Num
SAS Variable Name: VETERAN3
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|1,950|11.87|10.20|
2|No|14,432|87.82|89.50|
7|Dont know/Not Sure|12|0.07|0.07|
9|Refused|39|0.24|0.23|
BLANK|Not asked or Missing|54|.|.|

Label: Employment Status
Type of Variable: Num
SAS Variable Name: EMPLOY1
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Employed for wages|6,829|41.80|47.45|
2|Self-employed|1,196|7.32|8.67|
3|Out of work for 1 year or more|318|1.95|2.45|
4|Out of work for less than 1 year|274|1.68|2.29|
5|A homemaker|668|4.09|4.68|
6|A student|361|2.21|4.07|
7|Retired|5,221|31.95|22.05|
8|Unable to work|1,279|7.83|6.95|
9|Refused|193|1.18|1.40|
BLANK|Not asked or Missing|148|.|.|

Label: Number of Children in Household
Type of Variable: Num
SAS Variable Name: CHILDREN
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1 - 87|Number of children
Notes: _ _ = Number of children|3,973|24.40|30.61|
88|None|12,009|73.76|67.42|
99|Refused|300|1.84|1.96|
BLANK|Not asked or Missing|205|.|.|

Label: Income Level
Type of Variable: Num
SAS Variable Name: INCOME3
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Less than $10,000|375|2.33|2.87|
2|Less than $15,000 ($10,000 to < $15,000)|449|2.79|2.39|
3|Less than $20,000 ($15,000 to < $20,000)|568|3.53|3.12|
4|Less than $25,000 ($20,000 to < $25,000)|858|5.33|4.45|
5|Less than $35,000 ($25,000 to < $35,000)|1,775|11.03|11.35|
6|Less than $50,000 ($35,000 to < $50,000)|1,828|11.36|11.57|
7|Less than $75,000 ($50,000 to < $75,000)|2,277|14.15|13.56|
8|Less than $100,000? ($75,000 to < $100,000)|1,762|10.95|10.96|
9|Less than $150,000? ($100,000 to < $150,000)?|1,811|11.25|11.52|
10|Less than $200,000? ($150,000 to < $200,000)|698|4.34|4.83|
11|$200,000 or more|670|4.16|4.57|
77|Dont know/Not sure|1,358|8.44|9.48|
99|Refused|1,667|10.36|9.32|
BLANK|Not asked or Missing|391|.|.|

Label: Pregnancy Status
Type of Variable: Num
SAS Variable Name: PREGNANT
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|82|2.73|3.74|
2|No|2,888|96.30|95.17|
7|Dont know/Not Sure|13|0.43|0.61|
9|Refused|16|0.53|0.49|
BLANK|Not asked or Missing
Notes: respondent sex, SEXVAR, is coded 1; or Module 25.01, BIRTHSEX, is coded 1; or AGE  is greater than 49|13,488|.|.|

Label: Reported Weight in Pounds
Type of Variable: Num
SAS Variable Name: WEIGHT2
Value|Value Label|Frequency|Percentage|Weighted Percentage|
50 - 0776|Weight (pounds)
Notes: 0 _ _ _ = weight in pounds|15,049|94.20|94.17|
7777|Dont know/Not sure|250|1.56|1.88|
9023 - 9352|Weight (kilograms)
Notes: The initial ´9´ indicates this was a metric value.|31|0.19|0.27|
9999|Refused|646|4.04|3.68|
BLANK|Not asked or Missing|511|.|.|

Label: Reported Height in Feet and Inches
Type of Variable: Num
SAS Variable Name: HEIGHT3
Value|Value Label|Frequency|Percentage|Weighted Percentage|
200 - 711|Height (ft/inches)
Notes: 0 _ / _ _ = feet / inches|15,571|97.83|97.53|
7777|Dont know/Not sure|82|0.52|0.81|
9061 - 9998|Height (meters/centimeters)
Notes: The initial  ´9 ´ indicates this was a metric value.|15|0.09|0.24|
9999|Refused|248|1.56|1.41|
BLANK|Not asked or Missing|571|.|.|

Label: Are you deaf or do you have serious difficulty hearing?
Type of Variable: Num
SAS Variable Name: DEAF
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|1,396|8.82|6.87|
2|No|14,335|90.62|92.58|
7|Dont know/Not Sure|59|0.37|0.35|
9|Refused|29|0.18|0.19|
BLANK|Not asked or Missing|668|.|.|

Label: Blind or Difficulty seeing
Type of Variable: Num
SAS Variable Name: BLIND
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|943|5.99|5.50|
2|No|14,738|93.57|94.10|
7|Dont know/Not Sure|41|0.26|0.20|
9|Refused|29|0.18|0.20|
BLANK|Not asked or Missing|736|.|.|

Label: Difficulty Concentrating or Remembering
Type of Variable: Num
SAS Variable Name: DECIDE
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|2,100|13.38|15.35|
2|No|13,463|85.78|83.74|
7|Dont know/Not Sure|91|0.58|0.60|
9|Refused|40|0.25|0.31|
BLANK|Not asked or Missing|793|.|.|

Label: Difficulty Walking or Climbing Stairs
Type of Variable: Num
SAS Variable Name: DIFFWALK
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|2,936|18.79|15.19|
2|No|12,620|80.77|84.37|
7|Dont know/Not Sure|43|0.28|0.24|
9|Refused|26|0.17|0.19|
BLANK|Not asked or Missing|862|.|.|

Label: Difficulty Dressing or Bathing
Type of Variable: Num
SAS Variable Name: DIFFDRES
Value|Value Label|Frequency|Percentage|Weighted Percentage|
1|Yes|684|4.39|3.99|
2|No|14,863|95.36`;