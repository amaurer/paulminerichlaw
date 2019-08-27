// JavaScript Document for charity html template

$(document).ready(function() {
	
	
//open searchbar toggle code

"use strict";
		// Search field toggle in top bar
		$('li.search a').click(function(e) {
			$(this).parent().find('#top-search').toggle().focus();
			$('#top-links').toggleClass('search-open');
			e.preventDefault();
		});
		
		
		// Client logo corousel
		"use strict";
		$("#owl-demo").owlCarousel({
		 autoPlay: 3000, //Set AutoPlay to 3 seconds
	  	 items : 4,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2]
 
  });
// Testiminail  corousel
	"use strict";
	$("#owl-demo-testimonial").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });	
  
		
});

///////// javascipt form thankyou massage


function thanks() {
"use strict";
document.getElementById('thank').innerHTML = "<div class='alert alert-success' role='alert'> Thank you! Your message has been successfully sent. We will contact you very soon! </div>"; 
document.getElementById('thank_1').innerHTML = "<div class='alert alert-success' role='alert'> Thank you! Your message has been successfully sent. We will contact you very soon! </div>"; 
return true;
}




		if( $( '.map' ).length ) {
	
			$( '.map' ).each( function( i, e ) {
	
				var $gmap = $( e );
				var $gmap_title = $gmap.attr( 'data-gmapTitle' );
				var $gmap_id = $gmap.attr( 'id' );
				var $gmap_lat = $gmap.attr( 'data-gmapLat' );
				var $gmap_lng = $gmap.attr( 'data-gmapLon' );
				var $gmap_zoom = parseInt( $gmap.attr( 'data-gmapZoom' ) );
				
				var latlng = new google.maps.LatLng( $gmap_lat, $gmap_lng );			
				var options = { 
					scrollwheel: false,
					draggable: true, 
					zoomControl: true,
					disableDoubleClickZoom: true,
					disableDefaultUI: true,
					zoom: $gmap_zoom,
					center: latlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				
				var styles = [ 
							  {
								featureType: "all",
								stylers: [
								  { saturation: -80 }
								]
							  },{
								featureType: "road.arterial",
								elementType: "geometry",
								stylers: [
								  { hue: "#82a536" },
								  { saturation: 40 }
								]
							  },{
								featureType: "poi.business",
								elementType: "labels",
								stylers: [
								  { visibility: "off" }
								]
							  }
							];
				
				var styledMap = new google.maps.StyledMapType( styles,{ name: "MULE Map" } );
				var map = new google.maps.Map( document.getElementById( $gmap_id ), options );
				var m_icon = 'img/icons/map_marker.png';
			
				var marker = new google.maps.Marker( {
					position: latlng,
					map: map,
					//icon: m_icon,
					title: $gmap_title
				} );
				
				map.mapTypes.set( 'map_style', styledMap );
				map.setMapTypeId( 'map_style' );
				
				var contentString = '<strong>Paul&nbsp;T.&nbsp;Minerich&nbsp;Attorney&nbsp;at&nbsp;Law</strong><br />940&nbsp;West&nbsp;17th&nbsp;Street,&nbsp;Suite&nbsp;D<br />Santa Ana, CA 92706<br />800-578-4737 (Toll Free)<br />Chúng Tôi Nói Tiếng Việt';
				var infowindow = new google.maps.InfoWindow( {
					content: contentString
				} );
				
				infowindow.open( map, marker ); // show info by default
				
				google.maps.event.addListener( marker, 'click', function() {
					infowindow.open( map, marker );
				} );
	
			} );
		}	
	

