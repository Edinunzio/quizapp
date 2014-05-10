var writer = function(data){
	// write html container
	// insert data into html elements
	/*
		<div id="1">
				<label>Insert sample true or false question here.</label>
  			<div class="btn-group">
					<button value="true" type="button" class="btn btn-default">True</button>
					<button value="false" type="button" class="btn btn-default">False</button>
				</div>
			</div>
	*/
	this.questions = questions;
	this.q_len = questions.length;


	
	//Object {id: 2, question: "Ridgewood was involved in the Manhattan Project", tf: true, info: "Look out for that radroach!!!"} 

	this.wrButtonGroup = '<div class="btn-group"><button value="true" type="button" class="btn btn-default">True</button><button value="false" type="button" class="btn btn-default">False</button></div>';

	this.wrapper = $('form');
	this.random = Math.floor((Math.random() * questions.length));
	this.wrLabel = '<label>'+this.questions[this.random].question+'</label>';
	this.wrContainer = '<div class="ques-group" id="id_'+this.random+'">'+this.wrLabel+this.wrButtonGroup+'<div class="info">'+this.questions[this.random].info+'</div></div>';
	
	this.wrapper.append(this.wrContainer);
	console.log(this.questions[this.random]);
	this.questions.pop(this.random);

	$('button').on('click', function(){
		$('.info').css('display', 'block');
	});




	/*for (i=0; i< this.q_len; i++){

// just insert everything in all at once


		this.wrLabel = '<label>'+this.questions[i].question+'</label>';
		this.wrContainer = '<div class="ques-group" id="id_'+i+'">'+this.wrLabel+this.wrButtonGroup+'</div>';
		
		this.wrapper.append(this.wrContainer);
	}*/

};
var evaluate = function(ind, usrval, ans){
	ind = ind;
	response = questions[ind].info;
	if (usrval == ans){
		answer = "correct";
	}
	else{
		answer = "wrong";
	};


}