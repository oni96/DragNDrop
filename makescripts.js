var dropped=0;

$( function() {
  if(dropped<2){
    $(".shirt" ).draggable({revert:"invalid"});
    $(".pants" ).draggable({revert:"invalid"});
  }

$( ".character" ).droppable({
drop: function( event, ui ) {
  dropped++;
  console.log("COUNT:"+dropped);

  if (dropped==2) {
    $('.character').droppable("disable");
  }
  $( this )
    .addClass( "ui-state-highlight" )
    .find( "p" )
      .html( "Dropped!" );
    }
  });
});
