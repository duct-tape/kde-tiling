client = workspace.activeClient;
geo = client.geometry;

geo.y = 36;
geo.height = workspace.displayHeight - (workspace.displayHeight * 0.06);

maxWidth = workspace.displayWidth;
half = maxWidth / 2;
offset = maxWidth * 0.0125;

halfSize = (maxWidth / 2) - offset;
thirdSize = (maxWidth / 3) - offset;
twoThirdsSize = ((maxWidth / 3) * 2) - offset;
size = twoThirdsSize;
if (geo.width > thirdSize) {
    size = thirdSize;
}
if (geo.width > halfSize) {
    size = halfSize;
}


geo.width = size;
geo.x = maxWidth * 0.01;

client.geometry = geo;
