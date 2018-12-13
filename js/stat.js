var getRandomNumber = function(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

var getMaxValueFromArray = function(array) {
  var maxElement = 0;
  for (var i = 0; i < array.length; i++) {
    if (maxElement < array[i]) {
      maxElement = array[i];
    }
  }
  return maxElement;
};

var renderRect = function(
  ctx,
  columnColor,
  columnCoordX,
  columnCoordY,
  columnWidht,
  columnHeight
) {
  ctx.fillStyle = columnColor;
  ctx.fillRect(columnCoordX, columnCoordY, columnWidht, columnHeight);
};

var renderText = function(
  ctx,
  textFont,
  textColor,
  textValue,
  textCoordX,
  textCoordY
) {
  ctx.fillStyle = textColor;
  ctx.font = textFont;
  ctx.fillText(textValue, textCoordX, textCoordY);
};

var renderStatistics = function(ctx, names, times) {
  //стартовая координата левого нижнего угла колонки результатов игрока.
  var startCoord = 140;
  // Вычисление самого большого времени.
  var maxTime = getMaxValueFromArray(times);
  renderRect(ctx, "rgba(0, 0, 0, 0.7)", 110, 20, 420, 270);
  renderRect(ctx, "white", 100, 10, 420, 270);
  ctx.fillStyle = "black";
  ctx.font = "16px PT Mono";
  renderText(ctx, "16px PT Mono", "black", "Ура вы победили!", 120, 40);
  renderText(ctx, "16px PT Mono", "black", "Список результатов:", 120, 60);

  for (var i = 0; i < names.length; i++) {
    var columnColor = "rgba(0, 0," + getRandomNumber(0, 255) + ", 1";
    if (names[i] === "Вы") {
      columnColor = "red";
    }

    renderText(
      ctx,
      "16px PT Mono",
      "black",
      Math.floor(times[i]),
      startCoord,
      90
    );
    renderText(ctx, "16px PT Mono", "black", names[i], startCoord, 260);
    renderRect(
      ctx,
      columnColor,
      startCoord,
      230,
      40,
      (-130 * times[i]) / maxTime
    );
    startCoord += 90;
  }
};
