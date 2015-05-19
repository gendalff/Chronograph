# Chronograph
===========
A simple JS module to analyse browser time spending for anything.

<a href="http://plnkr.co/edit/Xq9rR4VihVW9pw0q7fQC?p=preview">DEMO</a>

interface:
to start measung:
Chronograph.start("optional_messung_name");
to put a lap point:
Chronograph.lap("optional_messung_name", "optional_lap_name");
to stop measung:
Chronograph.stop("optional_messung_name");
to get report for the messung:
Chronograph.reportSingle("optional_messung_name");
to remove messung:
Chronograph.clear("optional_messung_name");

in case of redraw speed messung use tick() function:
Chronograph.tick("optional_messung_name");
