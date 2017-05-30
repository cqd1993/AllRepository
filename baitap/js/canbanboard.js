var COLUMN_TYPE = ['todo', 'doing', 'done'];

var DB ={
	getData: function(){
		if(typeof(Storage) !== "undefined")
		{
			var data;
			try{
				data = JSON.parse(localStorage.getItem('list')) || {};

			}
			catch (error) {
				data = {};
			}
			return data;
		}
		else
		{
			alert("ko support");
			return {};
		}	

	},
	setData: function(data){
		localStorage.setItem('list', JSON.stringify(data));
	}

};

var list = DB.getData();

var app = {
	newJob: function(e, type, input){
		
		var jobName = $(input).val();

		var event = window.event || e;

		if(event.keyCode === 13 && jobName.trim() !== ''){

			if(!list[type]) list[type] =[];

			list[type].push(jobName);
			// console.log(a);
			DB.setData(list);
            // console.log(b);
			//update dom
			// this.editorJob(type, jobName);
			this.addJobToList(type, jobName);
			// reset input
			$(input).val('');
		}
	},
	//addJobtolist
	addJobToList: function(type, jobName){
		var item ='<div href="#" class="list-group-item ui-sortable-handle">'+ jobName + ' <span class="glyphicon glyphicon-trash" onclick="app.deleteJob(this)"></span> </div>';
		$('#' + type).append(item);
		console.log(item);
		
	},
	// editorJob: function(type, jobName){
	// 	var item =$('.list-group-item');
	// 	$('.list-group-item').on('click', function(){
	// 		jobName = item;
			
	// 		$('#' + type). $('#new_job_done').focus();
	// 	});
		
	// },
	deleteJob: function(span)
	{
		var modal = $('#modal-confirm');
		var btn = $('#btn-delete');
		var item =$(span).parent();

		// item.remove();

		modal.modal('show');

		btn.off('click');

		btn.on('click', function(){
			// console.log("call back");

			var columType = item.parent().attr('id');
			var itemPosition = $('#' + columType + '.list-group-item').index(item);
			console.log(itemPosition);
			console.log(columType);

			list[columType].splice('itemPosition', 1);
            DB.setData(list);


			item.remove();
			modal.modal('hide');
		})
	}
};


	

$(function() {
	COLUMN_TYPE.forEach(function(type){
		var columType = list[type] || [];
		columType.forEach(function(jobName){
			app.addJobToList(type, jobName);
		})
	});

	// var doing = list['doing'] || [];
	// doing.forEach(function(job){
	// 	app.addJobToList('doing', job);

	// });

	// var doing = list['todo'] || [];
	// doing.forEach(function(job){
	// 	app.addJobToList('todo', job);

	// });

	// var doing = list['done'] || [];
	// doing.forEach(function(job){
	// 	app.addJobToList('done', job);

	// });


	$( ".sorted-list" ).sortable({
		
	  	connectWith: ".sorted-list",
	  	// placeholder: "ui-state-highlight",
	  
	  start: function(event, ui)
	  {
	  	// add style class
	  	$(ui.item[0]).addClass('dragging');
	  	// ui.item.oldColumType = ui.item.context.parentElement.getAttribute('id');
	  	// ui.item.oldItemPosition = ui.item.index();

	  },
	  stop: function(event, ui)
	  {
	  	// remove style class
	  	$(ui.item[0]).removeClass('dragging');

	  	// var item = ui.item;
	  	// var oldColumType = item.oldColumType;
	  	// var oldItemPosition = item.oldItemPosition;
	  	// var newColumType = item.context.parentElement.getAttribute('id');
	  	// var newPosition = item.index();

	  	// list[newColumType].splice(newPosition, 0, item[0].innerText);
	  	// console.log(newColumType);
	  	// DB.setData(list);
	  }

	});
	placeholder: "ui-state-highlight"
} );
	