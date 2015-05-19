# Chronograph
===========
A simple JS module to analyse browser time spending for anything.

<a href="http://plnkr.co/edit/Xq9rR4VihVW9pw0q7fQC?p=preview">DEMO</a>

interface:<br><br>
to start measung:<br>
Chronograph.start("optional_messung_name");<br>
to put a lap point:<br>
Chronograph.lap("optional_messung_name", "optional_lap_name");<br>
to stop measung:<br>
Chronograph.stop("optional_messung_name");<br>
to get report for the messung:<br>
Chronograph.reportSingle("optional_messung_name");<br>
to remove messung:<br>
Chronograph.clear("optional_messung_name");<br><br>

in case of redraw speed messung use tick() function:<br>
Chronograph.tick("optional_messung_name");
