## Bubble sort

1)

[**-6 20** 8 -2 4] (-6 < 20)

[-6 **20 8** -2 4] => [-6 **8 20** -2 4] (20 > 8)

[-6 8 **20 -2** 4] => [-6 8 **-2 20** 4] (20 > -2)

[-6 8 -2 **20 4**] => [-6 8 -2 **4 20**] (20 > 4)

sorted = **false**

2)

[**-6 8** -2 4 20] (-6 < 8)

[-6 **8 -2** 4 20] => [-6 **-2 8** 4 20] (8 > -2)

[-6 -2 **8 4** 20] => [-6 -2 **4 8** 20] (8 > 4)

[-6 -2 4 **8 20**] (8 < 20)

sorted = **false**

1) comparisons

sorted = **true**