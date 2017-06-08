var COLUMN_TYPE = ['tdo', 'doing', 'done'];

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

var list = DB.getData();// lưu lại biến list đồng thời lưu lại vào trong localstorage


var app = {
	newJob: function(e, type, input){
		
		var jobName = $(input).val();

		var event = window.event || e;

		if(event.keyCode === 13 && jobName.trim() !== ''){

			if(!list[type]) list[type] = [];

			list[type].push(jobName);
			// console.log(a);
			var a = DB.setData(list);
            console.log(a);
			//update dom
			// this.editorJob(type, jobName);
			this.addJobToList(type, jobName);
			//reset input
			$(input).val('');
		}
	},
	//addJobtolist
	addJobToList: function(type, jobName){
		var item ='<div href="#" class="list-group-item ui-sortable-handle">'+ jobName + ' <span class="glyphicon glyphicon-trash" onclick="app.deleteJob(this)"></span> </div>';
		$('#' + type).append(item);
		console.log(item);
		
	},
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

			var column_Type = item.parent().attr('id');
			var item_Position = $('#' + column_Type + ' .list-group-item').index(item);
			console.log(item_Position);
			console.log(column_Type);

			list[column_Type].splice(item_Position, 1);
            DB.setData(list);


			item.remove();
			modal.modal('hide');
		})
	}
};


	

$(function() {
	COLUMN_TYPE.forEach(function(type){
		var column_Type = list[type] || [];
		column_Type.forEach(function(jobName){
			app.addJobToList(type, jobName);
		})
	});

	// var doing = list['doing'] || [];
	// doing.forEach(function(job){
	// 	app.addJobToList('doing', job);

	// });//lưu lai trong storage

	// var doing = list['tdo'] || [];
	// doing.forEach(function(job){
	// 	app.addJobToList('tdo', job);

	// });

	// var doing = list['done'] || [];
	// doing.forEach(function(job){
	// 	app.addJobToList('done', job);

	// });


	$( ".sorted-list" ).sortable({
		
	  	connectWith: ".sorted-list",
	  	placeholder: "ui-state-highlight",
	  
	  start: function(event, ui)
	  {
	  	// add style class
	  	$(ui.item[0]).addClass('dragging');
		// ui.item.oldColumnType = ui.item.context.parentElement.getAttribute('id');
	 //    ui.item.oldItemPosition = ui.item.index();

	  },
	  stop: function(event, ui)
	  {
	  	// remove style class
	  	$(ui.item[0]).removeClass('dragging');

	  	// var item = ui.item;
	  	// var oldColumnType = item.oldColumnType;
	  	// var oldItemPosition = item.oldItemPosition;
	  	// var newColumnType = item.context.parentElement.getAttribute('id');
	  	// console.log(newColumnType);
	  	// var newPosition = item.index();
	  	// list[oldColumnType].splice(oldItemPosition, 1);
	  	// list[newColumnType].splice(newPosition, 0, item[0].innerText);
	  	// console.log(newColumnType);
	  	// DB.setData(list);
	  }

	});
	
} );
	