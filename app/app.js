function budgetCardTemp(){
	const card=`
	<div class="budget-card">
		<form>
			<label for="title">Title:</label><br>
			<input type="text" name="title" id='title'><br>
			<label for="item1">Item 1:</label><br>
			<input type="text" name="item1" id='item1'><br>
			<label for="item2">Item 2:</label><br>
			<input type="text" name="item2" id='item2'><br>
		</form>
	`
}

function gettitle(){
	const title=document.querySelector('#title')
	return title.value
}

function getitems(){

}

function gettotal(){

}

function getvals(){
	const buton=document.querySelector('#new-budget')
	buton.addEventListener('click', () => {
	const div=document.querySelector('.div-two')
	const title=getTitle()
	const items=getitems()
	const total=gettotal()
	div.insertAdjacentHTML()
	}
}

function cleanup(){
	const budgetcard=document.querySelector('.budget-card')
	budgetcard.remove()
}