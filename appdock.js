const buttonStart = document.querySelector('#buttonStart')
const buttonStop = document.querySelector('#buttonStop')
const buttonReset = document.querySelector('#buttonReset')
const displayDays = document.querySelector('#days')
const displayHours = document.querySelector('#hours')
const displayMinutes = document.querySelector('#minutes')
const displaySeconds = document.querySelector('#seconds')
const colonDH = document.querySelector('#colonDH')
const colonHM = document.querySelector('#colonHM')
const colonMS = document.querySelector('#colonMS')
const inputDay = document.querySelector('#inputDays')
const inputHour = document.querySelector('#inputHours')
const inputMinute = document.querySelector('#inputMinutes')
const inputSecond = document.querySelector('#inputSeconds')
const inputTotalRounds = document.querySelector('#inputTotalRounds')
const buttonOKDays = document.querySelector('#buttonOKDays')
const buttonOKHours = document.querySelector('#buttonOKHours')
const buttonOKMinutes = document.querySelector('#buttonOKMinutes')
const buttonOKSeconds = document.querySelector('#buttonOKSeconds')
const checkboxBeforeTime = document.querySelector('#checkboxBeforeTime')
const checkboxAfterTime = document.querySelector('#checkboxAfterTime')
const checkboxFinishMess = document.querySelector('#checkboxFinishMess')
const inputBeforeTime = document.querySelector('#inputBeforeTime')
const inputAfterTime = document.querySelector('#inputAfterTime')
const inputFinishMess = document.querySelector('#inputFinishMess')
const inputOffNum = document.querySelector('#inputOffNum')
const checkboxAllOffOn = document.querySelector('#checkboxAllOffOn')
const checkboxOffSec = document.querySelector('#checkboxOffSec')
const checkboxCancelFinish = document.querySelector('#checkboxCancelFinish')
const settingsButton = document.querySelector('#settingsButton')
const settingsDisplay = document.querySelector('#settingsDisplay')
const url = document.querySelector('#url')
const fName = document.querySelector('#fontName')
const fNameTest = document.querySelector('#fontTest')
const fontTimeSize = document.querySelector('#timeSize')
const fontMessSize = document.querySelector('#messSize')
const sliderSizeTime = document.querySelector('#slideTimeSize')
const sliderSizeMess = document.querySelector('#slideMessSize')
const applyFontButton = document.querySelector('#applyFontButton')
const resetFontButton = document.querySelector('#resetFontsSizeButton')
const colorTimeText = document.querySelector('#timerColor')
const colorMessBAText = document.querySelector('#messageBATextColor')
const colorMessFText = document.querySelector('#finishColor')
const finishFontSize = document.querySelector('#finishFontSize')
const finishFontSliderSize = document.querySelector('#finishFontSliderSize')
const checkboxFinish = document.querySelector('#checkboxFinish')
const colorOfShadow = document.querySelector('#shadowColor')
const colorShadowHSCheckbox = document.querySelector('#checkboxShadow')
const slideShadowSize = document.querySelector('#slideShadowSize')
const shadowSize = document.querySelector('#shadowSize')
const colorOfOutline = document.querySelector('#outlineColor')
const colorOutlineHSCheckbox = document.querySelector('#checkboxOutline')
const slideOutlineSize = document.querySelector('#slideOutlineSize')
const outlineSize = document.querySelector('#outlineSize')
const resetColor = document.querySelector('#resetColor')
const displayMess = document.querySelector('#displayMess')
const buttonUrl = document.querySelector('#buttonUrl')
const buttonFontName = document.querySelector('#buttonFontName')
const mainDisplay = document.querySelector('#mainDisplay')
const settingsButtonDisplay = document.querySelector('#settingsButtonDisplay')
const mainSettingsTopDisplay = document.querySelector('#mainSettingsTopDisplay')
const fontSettingsDisplay = document.querySelector('#fontSettingsDisplay')
const colorSettingsDisplay = document.querySelector('#colorSettingsDisplay')
const buttonFontMain = document.querySelector('#buttonFontMain')
const buttonColorMain = document.querySelector('#buttonColorMain')
const mainTab = document.querySelector('#mainTab')
const lAlign = document.querySelector('#left')
const rAlign = document.querySelector('#right')
const cAlign = document.querySelector('#centre')
const tAlign = document.querySelector('#top')
const bAlign = document.querySelector('#bottom')
const mAlign = document.querySelector('#middle')
let reseted = 0
let timer,
	totalRounds = 4,
	stage = 1,
	tempfile,
	tempfile2,
	secFinish = 0,
	secFinishHS = false,
	timeColor = '',
	messBT = '',
	messBTHS = false,
	messBTcolor = '',
	messAT = '',
	messATHS = false,
	messATcolor = '',
	messF = '',
	messFHS = false,
	messFcolor = '',
	buttonPressed = 'none',
	zeroIsReached = false,
	fontUrl = '',
	fontName = '',
	timeSize = 100,
	messSize = 100,
	finishSize = 100,
	fPreview = false,
	shadowWidth = 10,
	outlineColor = '',
	outlineYN = true,
	outlineWidth = 5,
	fontApply = false,
	colorsApply = false,
	year = 0,
	month = 0,
	day = 0,
	hour = 0,
	min = 0,
	sec = 00,
	sec2 = 0,
	timeHS = 3,
	hAlign = '',
	vAlign = '',
	textColor = '',
	shadowYN = false,
	shadowColor = '',
	storageInfo,
	browserD,
	alignText,
	display = 'main',
	tag = 'storage:',
	tag2 = 'display:',
	message,
	allOffOn = false,
	settingsChoice = 'font',
	cancelFinish = false,
	finishRun = false
const channel = new BroadcastChannel('obsTimer')
// window.localStorage.removeItem(tag)
// window.localStorage.removeItem(tag2)
if (tag in localStorage && tag2 in localStorage) updateSettings()
else defaultSettings()
// defaultSettings()
sliderSizeTime.value = timeSize
sliderSizeMess.value = messSize
setAlignPics()
setAlignIcon()
displayMain()
checkboxSet()
drawTime()
function drawTime() {
	if (day >= 1) timeHS = 1
	if (day == 0 && hour >= 1) timeHS = 2
	if (day == 0 && hour == 0 && min >= 1) timeHS = 3
	if (day == 0 && hour == 0 && min == 0) timeHS = 4
	if (timeHS == 1) showAllTime()
	if (timeHS == 2) showAllTimeNoDays()
	if (timeHS == 3) showAllTimeNoDaysHours()
	if (timeHS == 4) showAllTimeNoDaysHoursMinutes()
	displayDays.innerHTML = day
	inputDay.value = day
	colonDH.innerHTML = ':'
	displayHours.innerHTML = hour
	inputHour.value = hour
	colonHM.innerHTML = ':'
	displayMinutes.innerHTML = min
	inputMinute.value = min
	colonMS.innerHTML = ':'
	if (sec > 9) displaySeconds.innerHTML = sec
	else displaySeconds.innerHTML = ('0' + sec).slice(-2)
	inputSecond.value = sec
	inputBeforeTime.value = messBT
	inputAfterTime.value = messAT
	inputFinishMess.value = messF
	inputOffNum.value = secFinish
	checkboxBeforeTime.checked = messBTHS
	checkboxAfterTime.checked = messATHS
	checkboxFinishMess.checked = messFHS
	checkboxOffSec.checked = secFinishHS
	colorTimeText.value = timeColor
	colorMessBAText.value = messBTcolor
	colorMessFText.value = messFcolor
	colorOfShadow.value = shadowColor
	colorShadowHSCheckbox.checked = shadowYN
	shadowSize.value = shadowWidth
	slideShadowSize.value = shadowWidth
	colorOfOutline.value = outlineColor
	colorOutlineHSCheckbox.checked = outlineYN
	outlineSize.value = outlineWidth
	slideOutlineSize.value = outlineWidth
	url.value = fontUrl
	fName.value = fontName
	sliderSizeTime.value = timeSize
	fontTimeSize.value = timeSize
	sliderSizeMess.value = messSize
	fontMessSize.value = messSize
	finishFontSize.value = finishSize
	finishFontSliderSize.value = finishSize
	if (finishRun) {
		showAllTimeNoDaysHoursMinutes()
		displaySeconds.innerHTML = 'Finish'
	}
	saveStorage()
	channel.postMessage(message)
}
function saveStorage() {
	storageInfo = [fontUrl, fontName, timeSize, messSize, hAlign, vAlign, shadowColor, shadowYN, timeColor, messBTcolor, messATcolor, messFcolor, finishSize, fPreview, shadowWidth, outlineColor, outlineYN, outlineWidth, settingsChoice, cancelFinish]
	browserD = [zeroIsReached, secFinish, year, month, day, hour, min, sec, timeHS, messBT, messBTHS, messAT, messATHS, messF, messFHS, secFinishHS, allOffOn]
	localStorage.setItem(tag, JSON.stringify(storageInfo))
	localStorage.setItem(tag2, JSON.stringify(browserD))
	tempfile = JSON.parse(window.localStorage.getItem(tag))
	tempfile2 = JSON.parse(window.localStorage.getItem(tag2))
	message = [tempfile, tempfile2]
}
function colorTime() {
	if (buttonPressed == 'start') return
	timeColor = colorTimeText.value
	drawTime()
}
function colorMess() {
	if (buttonPressed == 'start') return
	messBTcolor = colorMessBAText.value
	drawTime()
}
function colorFinish() {
	if (buttonPressed == 'start') return
	messFcolor = colorMessFText.value
	drawTime()
}
function finishSliderWidthSize() {
	if (buttonPressed == 'start') return
	finishSize = finishFontSliderSize.value
	drawTime()
}
function colorFinishHS() {
	if (buttonPressed == 'start') {
		if (checkboxFinish.checked) checkboxFinish.checked = false
		else checkboxFinish.checked = true
		return
	}
	if (checkboxFinish.checked) fPreview = true
	else fPreview = false
	drawTime()
}
function colorShadow() {
	if (buttonPressed == 'start') return
	shadowColor = colorOfShadow.value
	drawTime()
}
function colorOutline() {
	if (buttonPressed == 'start') return
	outlineColor = colorOfOutline.value
	drawTime()
}
function shadowSliderWidthSize() {
	if (buttonPressed == 'start') return
	shadowWidth = slideShadowSize.value
	shadowSize.value = shadowWidth
	drawTime()
}
function colorShadowHS() {
	if (buttonPressed == 'start') {
		if (colorShadowHSCheckbox.checked) colorShadowHSCheckbox.checked = false
		else colorShadowHSCheckbox.checked = true
		return
	}
	if (colorOutlineHSCheckbox.checked) outlineYN = false

	if (colorShadowHSCheckbox.checked) shadowYN = true
	else shadowYN = false
	drawTime()
}
function outlineSliderWidthSize() {
	if (buttonPressed == 'start') return
	outlineWidth = slideOutlineSize.value
	outlineSize.value = outlineWidth
	drawTime()
}
function colorOutlineHS() {
	if (buttonPressed == 'start') {
		if (colorOutlineHSCheckbox.checked) colorOutlineHSCheckbox.checked = false
		else colorOutlineHSCheckbox.checked = true
		return
	}
	if (colorShadowHSCheckbox.checked) shadowYN = false
	if (colorOutlineHSCheckbox.checked) outlineYN = true
	else outlineYN = false
	drawTime()
}
function resetColors() {
	if (buttonPressed === 'start') {
		return
	}
	timeColor = '#ffffff'
	messBTcolor = '#ffffff'
	messATcolor = '#ffffff'
	messFcolor = '#ffffff'
	shadowColor = '#000000'
	outlineColor = '#000000'
	outlineYN = true
	outlineWidth = 1
	shadowYN = false
	shadowWidth = 10
	finishSize = 100
	hAlign = 'left'
	vAlign = 'flex-start'
	setAlignIcon()
	drawTime()
}
function sliderInputTime() {
	if (buttonPressed == 'start') return
	fontTimeSize.value = sliderSizeTime.value
	timeSize = sliderSizeTime.value
	drawTime()
}
function sliderInputMess() {
	if (buttonPressed == 'start') return
	fontMessSize.value = sliderSizeMess.value
	messSize = sliderSizeMess.value
	drawTime()
}
function checkboxSet() {
	if (messBTHS) checkboxBeforeTime.checked = true
	else checkboxBeforeTime.checked = false
	if (messATHS) checkboxAfterTime.checked = true
	else checkboxAfterTime.checked = false
	if (messFHS) checkboxFinishMess.checked = true
	else checkboxFinishMess.checked = false
	if (secFinishHS) checkboxOffSec.checked = true
	else checkboxOffSec.checked = false
	if (fPreview) checkboxFinish.checked = true
	else checkboxFinish.checked = false
	if (settingsChoice == 'font') settingsChoice = 'font'
	else settingsChoice = 'color'
}
function fontTextArea() {
	if (buttonPressed == 'start') return
	url.value = ''
}
function fontNameBox() {
	if (buttonPressed == 'start') return
	fName.value = ''
}
function applyFontUrl() {
	if (buttonPressed == 'start') return
	fontUrl = url.value
	fontName = fName.value
	drawTime()
}
function resetFontUrl() {
	if (buttonPressed == 'start') return
	fontUrl = 'https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap'
	fontName = 'Nunito'
	storageInfo[0] = fontUrl
	storageInfo[1] = fontName
	url.value = fontUrl
	fName.value = fontName
	drawTime()
}
function resetFontSize() {
	if (buttonPressed == 'start') return
	timeSize = 100
	messSize = 100
	storageInfo[2] = timeSize
	storageInfo[3] = messSize
	drawTime()
}
function showAllTime() {
	timeHS = 1
	displayDays.style.display = 'block'
	colonDH.style.display = 'block'
	displayHours.style.display = 'block'
	colonHM.style.display = 'block'
	displayMinutes.style.display = 'block'
	colonMS.style.display = 'block'
	displaySeconds.style.display = 'block'
}
function showAllTimeNoDays() {
	timeHS = 2
	displayDays.style.display = 'none'
	colonDH.style.display = 'none'
	displayHours.style.display = 'block'
	colonHM.style.display = 'block'
	displayMinutes.style.display = 'block'
	colonMS.style.display = 'block'
	displaySeconds.style.display = 'block'
}
function showAllTimeNoDaysHours() {
	timeHS = 3
	displayDays.style.display = 'none'
	colonDH.style.display = 'none'
	displayHours.style.display = 'none'
	colonHM.style.display = 'none'
	displayMinutes.style.display = 'block'
	colonMS.style.display = 'block'
	displaySeconds.style.display = 'block'
}
function showAllTimeNoDaysHoursMinutes() {
	timeHS = 4
	displayDays.style.display = 'none'
	colonDH.style.display = 'none'
	displayHours.style.display = 'none'
	colonHM.style.display = 'none'
	displayMinutes.style.display = 'none'
	colonMS.style.display = 'none'
	displaySeconds.style.display = 'block'
}
function inputDaysChange() {
	if (buttonPressed == 'start') return
	if (inputDay.value <= -1) {
		day = 0
		drawTime()
		return
	}
	if (inputDay.value >= 999) {
		day = 0
		drawTime()
		return
	}
	day = inputDay.value
	day = parseInt(day)
	setTimeHS()
	drawTime()
}
function inputDaysNum() {
	if (buttonPressed == 'start') {
		inputDay.value = ''
		return
	}
	drawTime()
	inputDay.value = ''
}
function inputHoursChange() {
	if (buttonPressed == 'start') return
	if (inputHour.value <= 0) {
		hour = 0
		drawTime()
		return
	}
	if (inputHour.value >= 23) {
		hour = 0
		drawTime()
		return
	}
	hour = inputHour.value
	hour = parseInt(hour)
	setTimeHS()
	drawTime()
}
function inputHoursNum() {
	if (buttonPressed == 'start') {
		inputHour.value = ''
		return
	}
	drawTime()
	inputHour.value = ''
}
function inputMinutesChange() {
	if (buttonPressed == 'start') return
	if (inputMinute.value <= 0) {
		min = 0
		drawTime()
		return
	}
	if (inputMinute.value >= 59) {
		min = 0
		drawTime()
		return
	}
	min = inputMinute.value
	min = parseInt(min)
	setTimeHS()
	drawTime()
}
function inputMinutesNum() {
	if (buttonPressed == 'start') {
		inputMinute.value = ''
		return
	}
	drawTime()
	inputMinute.value = ''
}
function setTimeHS() {
	if (day >= 1) timeHS = 1
	if (day == 0 && hour >= 1) timeHS = 2
	if (day == 0 && hour == 0 && min >= 1) timeHS = 3
	if (day == 0 && hour == 0 && min == 0) timeHS = 4
}
function inputSecondsChange() {
	if (buttonPressed == 'start') return
	if (inputSecond.value <= 0) {
		sec = 0
		drawTime()
		return
	}
	if (inputSecond.value >= 59) {
		sec = 0
		drawTime()
		return
	}
	sec = inputSecond.value
	sec = parseInt(sec)
	drawTime()
}
function inputSecondsNum() {
	if (buttonPressed == 'start') {
		inputSecond.value = ''
		return
	}
	drawTime()
	inputSecond.value = ''
}

function messBeforeInputChange() {
	if (buttonPressed == 'start') return
	messBT = inputBeforeTime.value
	drawTime()
}


function messBeforeCheckbox() {
	if (buttonPressed == 'start') {
		if (checkboxBeforeTime.checked) checkboxBeforeTime.checked = false
		else checkboxBeforeTime.checked = true
		return
	}
	if (checkboxBeforeTime.checked == true) messBTHS = true
	else messBTHS = false
	drawTime()
}
function messBeforeInput() {
	if (buttonPressed == 'start') return
	drawTime()
	inputBeforeTime.value = ''
}
function messAfterInputChange() {
	if (buttonPressed == 'start') return
	messAT = inputAfterTime.value
	drawTime()
}
function messAfterCheckbox() {
	if (buttonPressed == 'start') {
		if (checkboxAfterTime.checked) checkboxAfterTime.checked = false
		else checkboxAfterTime.checked = true
		return
	}
	if (checkboxAfterTime.checked) messATHS = true
	else messATHS = false
	drawTime()
}
function messAfterInput() {
	if (buttonPressed == 'start') return
	drawTime()
	inputAfterTime.value = ''
}
function messFinishInputChange() {
	if (buttonPressed == 'start') return
	messF = inputFinishMess.value
	drawTime()
}
function messFinishCheckbox() {
	if (buttonPressed == 'start') {
		if (checkboxFinishMess.checked) checkboxFinishMess.checked = false
		else checkboxFinishMess.checked = true
		return
	}
	if (checkboxFinishMess.checked) messFHS = true
	else messFHS = false
	drawTime()
}
function messFinishInput() {
	if (buttonPressed == 'start') return
	drawTime()
	inputFinishMess.value = ''
}
function messOffSecInputChange() {
	if (buttonPressed == 'start') return
	if (inputOffNum.value <= -1 || inputOffNum.value >= 901) {
		inputOffNum.value = secFinish
		return
	}
	secFinish = inputOffNum.value
	drawTime()
}
function offSecCheckbox() {
	if (buttonPressed == 'start') {
		if (checkboxOffSec.checked) checkboxOffSec.checked = false
		else checkboxOffSec.checked = true
		return
	}
	if (checkboxOffSec.checked) secFinishHS = true
	else secFinishHS = false
	drawTime()
}
function messOffSec() {
	if (buttonPressed == 'start') {
		inputOffNum.value = ''
		return
	}
	drawTime()
	inputOffNum.value = ''
}
function allOffOnCheckbox() {
	if (buttonPressed == 'start') {
		if (checkboxAllOffOn.checked) checkboxAllOffOn.checked = false
		else checkboxAllOffOn.checked = true
		return
	}
	if (checkboxAllOffOn.checked) allOffOn = true
	else allOffOn = false
	drawTime()
}
function cancelFinishCheckbox() {
	if (zeroIsReached || finishRun) {
		if (checkboxCancelFinish.checked) {
			checkboxCancelFinish.checked = true
			cancelFinish = true
			finishRun = false
		} else {
			checkboxCancelFinish.checked = false
			cancelFinish = false
		}
	} else {
		checkboxCancelFinish.checked = false
		cancelFinish = false
	}
	drawTime()
}
function hAlignButton(pos) {
	if (buttonPressed == 'start') return
	if (pos == 1) {
		if (storageInfo[4] == 'left') return
		lAlign.src = alignText[2]
		cAlign.src = alignText[3]
		rAlign.src = alignText[5]
		hAlign = 'left'
		drawTime()
	}
	if (pos == 2) {
		if (storageInfo[4] == 'center') return
		lAlign.src = alignText[1]
		cAlign.src = alignText[4]
		rAlign.src = alignText[5]
		hAlign = 'center'
		drawTime()
	}
	if (pos == 3) {
		if (storageInfo[4] == 'right') return
		lAlign.src = alignText[1]
		cAlign.src = alignText[3]
		rAlign.src = alignText[6]
		hAlign = 'right'
		drawTime()
	}
}
function vAlignButton(pos) {
	if (buttonPressed == 'start') return
	if (pos == 1) {
		if (storageInfo[5] == 'flex-start') return
		tAlign.src = alignText[8]
		mAlign.src = alignText[9]
		bAlign.src = alignText[11]
		vAlign = 'flex-start'
		drawTime()
	}
	if (pos == 2) {
		if (storageInfo[5] == 'center') return
		tAlign.src = alignText[7]
		mAlign.src = alignText[10]
		bAlign.src = alignText[11]
		vAlign = 'center'
		drawTime()
	}
	if (pos == 3) {
		if (storageInfo[5] == 'flex-end') return
		tAlign.src = alignText[7]
		mAlign.src = alignText[9]
		bAlign.src = alignText[12]
		vAlign = 'flex-end'
		drawTime()
	}
}
function setAlignIcon() {
	if (buttonPressed == 'start') return
	if (hAlign == 'left') {
		lAlign.src = alignText[2]
		cAlign.src = alignText[3]
		rAlign.src = alignText[5]
	}
	if (hAlign == 'center') {
		lAlign.src = alignText[1]
		cAlign.src = alignText[4]
		rAlign.src = alignText[5]
	}
	if (hAlign == 'right') {
		lAlign.src = alignText[1]
		cAlign.src = alignText[3]
		rAlign.src = alignText[6]
	}
	if (vAlign == 'flex-start') {
		tAlign.src = alignText[8]
		mAlign.src = alignText[9]
		bAlign.src = alignText[11]
	}
	if (vAlign == 'center') {
		tAlign.src = alignText[7]
		mAlign.src = alignText[10]
		bAlign.src = alignText[11]
	}
	if (vAlign == 'flex-end') {
		tAlign.src = alignText[7]
		mAlign.src = alignText[9]
		bAlign.src = alignText[12]
	}
}
function setAlignPics() {
	alignText = ['', 'Images/leftGrey.png', 'Images/leftWhite.png', 'Images/centreGrey.png', 'Images/centreWhite.png', 'Images/rightGrey.png', 'Images/rightWhite.png', 'Images/topGrey.png', 'Images/topWhite.png', 'Images/middleGrey.png', 'Images/middleWhite.png', 'Images/bottomGrey.png', 'Images/bottomWhite.png']
}
function settings() {
	if (display == 'main') {
		if (settingsChoice == 'font') displayFont()
		if (settingsChoice == 'color') displayColor()
	} else {
		if (display == 'font') {
			display = 'main'
			displayMain()
		}
		if (display == 'color') {
			display = 'main'
			displayMain()
		}
	}
}
function displayMain() {
	display = 'main'
	settingsButton.style.color = 'white'
	buttonReset.style.color = 'white'
	mainDisplay.style.display = 'block'
	settingsButtonDisplay.style.display = 'block'
	mainSettingsTopDisplay.style.display = 'none'
	fontSettingsDisplay.style.display = 'none'
	colorSettingsDisplay.style.display = 'none'
}
function displayFont() {
	settingsButton.style.color = 'red'
	buttonReset.style.color = 'rgba(255, 255, 255, 0.2)'
	display = 'font'
	settingsChoice = 'font'
	buttonFontMain.style.color = 'red'
	buttonColorMain.style.color = 'white'
	mainDisplay.style.display = 'none'
	mainSettingsTopDisplay.style.display = 'block'
	fontSettingsDisplay.style.display = 'block'
	colorSettingsDisplay.style.display = 'none'
	settingsButtonDisplay.style.display = 'block'
}
function displayColor() {
	settingsButton.style.color = 'red'
	buttonReset.style.color = 'rgba(255, 255, 255, 0.2)'
	display = 'color'
	settingsChoice = 'color'
	buttonFontMain.style.color = 'white'
	buttonColorMain.style.color = 'red'
	mainDisplay.style.display = 'none'
	mainSettingsTopDisplay.style.display = 'block'
	fontSettingsDisplay.style.display = 'none'
	colorSettingsDisplay.style.display = 'block'
	settingsButtonDisplay.style.display = 'block'
}
function startButton() {
	if (buttonPressed == 'start') return
	if (day == 0 && hour == 0 && min == 0 && sec == 00) return
	checkboxCancelFinish.checked = false
	cancelFinish = false
	fPreview = false
	checkboxFinish.checked = false
	buttonPressed = 'start'
	buttonStart.buttonPressed = true
	buttonStart.style.color = 'red'
	buttonStop.style.color = 'white'
	buttonReset.style.color = 'rgba(255, 255, 255, 0.2)'
	applyFontButton.style.color = 'rgba(255, 255, 255, 0.2)'
	resetFontButton.style.color = 'rgba(255, 255, 255, 0.2)'
	resetColor.style.color = 'rgba(255, 255, 255, 0.2)'
	timer = setInterval(startCountdown, 1000)
}
function stopButton() {
	buttonPressed = 'stop'
	buttonStart.style.color = 'white'
	buttonStop.style.color = 'white'
	buttonReset.style.color = 'white'
	applyFontButton.style.color = 'white'
	resetFontButton.style.color = 'white'
	resetColor.style.color = 'white'
	clearInterval(timer)
}
function resetButton() {
	if (buttonPressed == 'start') return
	if (display == 'font' || display == 'color') return
	zeroIsReached = false
	buttonPressed = 'reset'
	clearInterval(timer)
	buttonStart.style.color = 'white'
	buttonStop.style.color = 'white'
	buttonReset.style.color = 'white'
	timeHS = 3
	displayDays.style.display = 'none'
	colonDH.style.display = 'none'
	displayHours.style.display = 'none'
	colonHM.style.display = 'none'
	messBT = ''
	messAT = ''
	messF = ''
	secFinish = 0
	inputBeforeTime.checked = false
	inputAfterTime.checked = false
	inputFinishMess.checked = false
	inputOffNum.checked = false
	messBTHS = false
	messATHS = false
	messFHS = false
	secFinishHS = false
	day = 0
	hour = 0
	min = 5
	sec = 0
	drawTime()
	// reseted = 0
}

function resetRound() {
	reseted = 0
}
function resetButtonNewHour() {
	checkboxCancelFinish.checked = true
	cancelFinish = true
	finishRun = false
	//maybe need hide top, it's cancel finish functionality




	if (buttonPressed == 'start') return
	if (display == 'font' || display == 'color') return
	zeroIsReached = false
	buttonPressed = 'reset'
	clearInterval(timer)
	buttonStart.style.color = 'white'
	buttonStop.style.color = 'white'
	buttonReset.style.color = 'white'
	timeHS = 3
	displayDays.style.display = 'none'
	colonDH.style.display = 'none'
	displayHours.style.display = 'none'
	colonHM.style.display = 'none'


	messBT=`${reseted+1}/${totalRounds}-`

	secFinish = 0
	inputBeforeTime.checked = false
	inputAfterTime.checked = false
	inputFinishMess.checked = false
	inputOffNum.checked = false
	messBTHS = true
	messATHS = false
	messFHS = false
	secFinishHS = false
	day = 0
	hour = 1
	min = 0
	sec = 0
	reseted++

	drawTime()
}
function zeroReached() {
	console.log('boom')
	const audio = new Audio()
	audio.src = "./two-symbols-minimal-logo-108965.mp3"
	audio.volume = 0.2
	audio.play()
	zeroIsReached = true
	finishRun = true
	stopButton()
	clearInterval(timer)
	drawTime()
	zeroIsReached = false
}
function increaseTotalRounds() {
	totalRounds++
}
function decreaseTotalRounds() {
	totalRounds--
}
function startCountdown() {
	if (day == 0 && hour == 0 && min == 0 && sec == 00) {
		zeroReached()
		return
	}
	if (sec >= 1) {
		sec -= 1
		drawTime()
		return
	}
	if (sec == 0 && min >= 1 && hour >= 1 && day >= 1) {
		sec = 59
		min -= 1
		drawTime()
		return
	}
	if (sec == 0 && min >= 1 && hour >= 1 && day == 0) {
		sec = 59
		min -= 1
		drawTime()
		return
	}
	if (sec == 0 && min >= 1 && hour == 0 && day == 0) {
		sec = 59
		min -= 1
		drawTime()
		return
	}
	if (sec == 0 && min == 0 && hour >= 1) {
		sec = 59
		min = 59
		hour -= 1
		drawTime()
		return
	}
	if (sec == 0 && min == 0 && hour == 0 && day >= 1) {
		sec = 59
		min = 59
		hour = 23
		day -= 1
		drawTime()
		return
	}
}
function defaultSettings() {
	fontUrl = 'https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap'
	fontName = 'Nunito'
	timeSize = 100
	messSize = 100
	hAlign = 'left'
	vAlign = 'flex-start'
	shadowColor = '#000000'
	shadowYN = false
	timeColor = '#ffffff'
	messBTcolor = '#ffffff'
	messATcolor = '#ffffff'
	messFcolor = '#ffffff'
	finishSize = 100
	fPreview = false
	shadowWidth = 10
	outlineColor = '#000000'
	outlineYN = true
	outlineWidth = 1
	settingsChoice = 'font'
	cancelFinish = false
	zeroIsReached = false
	secFinish = 0
	year = 0
	month = 0
	day = 0
	hour = 0
	min = 0
	sec = 0
	timeHS = 3
	messBT = ''
	messBTHS = false
	messAT = ''
	messATHS = false
	messF = ''
	messFHS = false
	secFinishHS = false
	allOffOn = false
	saveStorage()
}
function updateSettings() {
	storageInfo = JSON.parse(window.localStorage.getItem(tag))
	browserD = JSON.parse(window.localStorage.getItem(tag2))
	if (storageInfo[0] == '') fontUrl = 'https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap'
	else fontUrl = storageInfo[0]
	if (storageInfo[1] == '') fontName = 'Nunito'
	else fontName = storageInfo[1]
	timeSize = storageInfo[2]
	messSize = storageInfo[3]
	if (storageInfo[4] == '') hAlign = 'left'
	else hAlign = storageInfo[4]
	if (storageInfo[5] == '') vAlign = 'flex-start'
	else vAlign = storageInfo[5]
	if (storageInfo[6] == '') shadowColor = '#000000'
	else shadowColor = storageInfo[6]
	shadowYN = storageInfo[7]
	if (storageInfo[8] == '') timeColor = '#ffffff'
	else timeColor = storageInfo[8]
	if (storageInfo[9] == '') messBTcolor = '#ffffff'
	else messBTcolor = storageInfo[9]
	if (storageInfo[10] == '') messATcolor = '#ffffff'
	else messATcolor = storageInfo[10]
	if (storageInfo[8] == '') messFcolor = '#ffffff'
	else messFcolor = storageInfo[11]
	finishSize = storageInfo[12]
	fPreview = storageInfo[13]
	shadowWidth = storageInfo[14]
	if (storageInfo[8] == '') outlineColor = '#000000'
	else outlineColor = storageInfo[15]
	outlineYN = storageInfo[16]
	outlineWidth = storageInfo[17]
	settingsChoice = storageInfo[18]
	cancelFinish = storageInfo[19]
	zeroIsReached = false
	secFinish = browserD[1]
	year = browserD[2]
	month = browserD[3]
	day = browserD[4]
	hour = browserD[5]
	min = browserD[6]
	sec = browserD[7]
	timeHS = browserD[8]
	messBT = browserD[9]
	messBTHS = browserD[10]
	messAT = browserD[11]
	messATHS = browserD[12]
	messF = browserD[13]
	messFHS = browserD[14]
	secFinishHS = browserD[15]
	allOffOn = browserD[16]
	storageInfo = [fontUrl, fontName, timeSize, messSize, hAlign, vAlign, shadowColor, shadowYN, timeColor, messBTcolor, messATcolor, messFcolor, finishSize, fPreview, shadowWidth, outlineColor, outlineYN, outlineWidth, settingsChoice, cancelFinish]
	browserD = [zeroIsReached, secFinish, year, month, day, hour, min, sec, timeHS, messBT, messBTHS, messAT, messATHS, messF, messFHS, secFinishHS, allOffOn]
}
