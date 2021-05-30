<?php

$page_title = "무지개그림판";

?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link href="./styles.css" rel="stylesheet" type="text/css" />
		<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	</head>
	<div class='app'>
		<div class="controls">
			<div class="title">Painter</div>
			<div class="type">
				<input type="radio" name="pen-type" id="pen-pencil" checked>
				<label for "pen-pencil">
					<i class="fa fa-pencil"></i>
				</label>
				<input type="radio" name="pen-type" id="pen-brush">
				<label for "pen-brush">
					<i class="fa fa-pen-brush"></i>
				</label>
			</div>
			<div class="size">
				<label for "pen-size">Size</label>
				<input type="range" id="pen-size" min="1" max="5096">
			</div>
			<div class="colour">
				<label for "pen-colour">Colour</label>
				<input type="color" id="pen-colour" value="#000">
			</div>
			<div class="actions">
				<button id="SelectColourFromCanvas">Select Colour From Canvas</button>
				<button id="undowork">Undo</button>
				<button id="redowork">Redo</button>
				<button id="reset-canvas">Reset</button>
				<button id="save-canvas">Save</button>
			</div>
		</div>
		<div id="canvas-wrapper">
			<script src="./canvasfc.js"></script>
		</div>
	</div>
	<body>
		
	</body>
</html>