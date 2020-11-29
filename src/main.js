client = workspace.activeClient;
geo = client.geometry;

geo.y = 36;
geo.height = workspace.displayHeight - (workspace.displayHeight * 0.06);

geo.width = workspace.displayWidth * 0.98;
geo.x = workspace.displayWidth * 0.01;
client.geometry = geo;
