// ==UserScript==
// @name       Owen's Jamf Pro 10 Customizations
// @namespace  https://jss.
// @version    0.5
// @description  JSS customizations - Generic
// @include      *://jss.*
// @include      https://*.jamfcloud.com*
// ==/UserScript==

// - Intro/Disclaimer
// Last tested with JSS version 9.73
// Disclaimer: Script is presented as-is, use at your own risk.

var jssURL = window.location.protocol + "//" + window.location.host + "";
var customFileDirectory='https://opragel.github.io/customJSS/custom/';
var customLogoURL=customFileDirectory + 'osimp.png';
var customCSSURL=customFileDirectory + 'customJSS.css';

// Link to default JSS font (default Roboto)
var font="<link href='https://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet' type='text/css'>";
var customCSS="<link href='" + customCSSURL + "' rel='stylesheet' type='text/css'>";

var createMenuItem = function(  url, displayName ) {
    return '<li class=" "><a href="' + url + '">' + displayName + '</a></li>';
};

var createMenuItemID = function( url, displayName, id ) {
    return '<li class=" " id="' + id + '"><a href="' + url + '">' + displayName + '</a></li>';
};

// Adds font & CSS to header
//$('head').append(font + customCSS);

// $('#settings').attr('class','');

// // Change header/logo style
// $('#logo-dash .hidemobile').attr('src', customLogoURL);
var scriptURL = createMenuItem( 'scripts.html', 'Scripts' );
var packagesURL = createMenuItem( 'packages.html', 'Packages' );
var extensionsURL = createMenuItem( 'computerExtensionAttributes.html', 'Extension Attributes' );
var extensionsMobileURL = createMenuItem('mobileDeviceExtensionAttributes.html', 'Extension Attributes');
var settingsURL = createMenuItemID( 'settings.html', 'Settings', 'settingsconsole');
var advCompSearchURL = createMenuItemID( 'advancedComputerSearches.html?id=-1&o=c', 'Advanced Search', 'advancedSearch');
var advMobileSearchURL = createMenuItemID( 'advancedMobileDeviceSearches.html?id=-1&o=c', 'Advanced Search', 'advancedSearch');
var advUserSearchURL = createMenuItemID('advancedUserSearches.html?id=-1&o=c', 'Advanced Search', 'advancedSearch');
var policiesURL = createMenuItemID( 'policies.html', 'Computer Policies', 'policies');
var printersURL = createMenuItem( 'printers.html', 'Printers');
var accountsURL = createMenuItem( 'accounts.html', 'JSS Accounts');
var computersURL = createMenuItem( 'computers.html', 'Computers');
var mobileURL = createMenuItem( 'mobileDevices.html', 'Mobile Devices');
var JSSusersURL = createMenuItem('accounts.html', 'JSS Users & Groups');
var JSSlogsURL = createMenuItem('logging.html', 'JSS System Logs');
var JSSsummaryURL = createMenuItem('summary.html', 'JSS Summary');
var allComputersURL = createMenuItem('computers.html?queryType=Computers&query=*', 'All Computers');
var allUsersURL = createMenuItem('users.html?query=*', 'All Users');
var divider = "<li class='divider'></li>";

//     // Sidebar
//     $('#sidebar-nav,#logo-dash').addClass('sidebar-whole');//Groups sidebar elements
//     // Adds buttons for expanding sidebar
//     $('#sidebar').prepend("<img class='expandButton' id='bottomExpandButton' src='" + jssURL + "/images/navigation/arrow-active.png'><img class='expandButton' id='topExpandButton' src='" + jssURL + "/images/navigation/arrow-active.png'>");

//     $('#settings').attr('href', 'settings.html');

//     // Modifies spacing on form wrappers, h2s
//     $( 'li:contains("Management Settings")').remove();
//     $( '.searchLabel').remove();
//     // - Setting Pages
//     if ( $( "li:contains('JSS Information')").length ) {
//         // Adds links to sidebar
//         $('#sidebar-nav').prepend(computersURL,mobileURL,divider);
//         $('#sidebar-nav').append(accountsURL,JSSlogsURL,JSSsummaryURL,divider,allComputersURL,allUsersURL,policiesURL,extensionsURL,packagesURL,printersURL,scriptURL);
//         // Makes settings sections expandable & adds a little arrow
//         $('.settings-row h5').append("<img src='" + jssURL + "/images/navigation/down-arrow.png' width='9px' height='8px' alt='Expand'>");
//         $(function(){
//             $('.settings-row').click(function(){
//                 $(this).find('li').toggle();
//             });
//             $('.settings-row .settings-item, .settings-row .summary-item input, .settings-row .check').click(function(e){
//                 e.stopPropagation();
//             });
//         });

//     }

//     // - Computer Pages
//     else if ( $( 'li:contains("Managed Preferences")').length ) {
//         // Adds links to the sidebar
//         $('#sidebar-nav li:contains("Search Inventory")').after(allComputersURL,advCompSearchURL);
//         $('#sidebar-nav').append(extensionsURL,packagesURL,printersURL,scriptURL);

//         // Dividers to hide
//         //$('li:contains("Enrollment Invitations")').next('.divider').remove();

//         // Policies style changes
//         if( $( 'h2:contains("Policies")').length ) {
//             $('.policiesTable.dataTable thead tr').append("<th class='header' style='width: 15px;'>Logs</th>");
//             $('.policiesTable.dataTable tbody tr:not(".group")').each(function() {
//                 var computerLink = $(this).find('td a').attr('href');
//                 computerLink = computerLink.replace(/o=r/, 'o=l');
//                 $(this).append("<td printf><a class='cancelButton' href='" + computerLink + "'>Logs</a>");
//             });
//         }

        // Advanced Computer changes
if( $( "h2:contains('Advanced Computer Search')").length ) {
    $(".list-header#table-top").css("display", "none");
    $("#DataTables_Table_0 thead tr").append("<th class='header'>Details</th><th class='header'>Edit</th>");
    $('#DataTables_Table_0 tbody tr').each(function() {
        var editLink = $(this).find("a").attr("href");
        var viewLink = editLink.replace(/o=r/, "o=v");
        $(this).find("a").attr("href",viewLink);
        $(this).append("<td><a href='" + editLink + "'>View</a>");
        $(this).append("<td><a href='" + editLink.replace(/o=r/, 'o=u') + "'>Edit</a>");
    });
}

//         // Computer Groups changes
//         if( $( "h2:contains('Computer Groups')").length ) {
//             $('.standardDataTable thead tr').append("<th class='header'>Details</th><th class='header'>Edit</th>");
//             $('.standardDataTable tbody tr').each(function() {
//                 var editLink = $(this).find('.view').attr('href');
//                 var viewLink = editLink.replace(/o=r/, 'o=v');
//                 $(this).find('.view').attr('href',viewLink);
//                 $(this).append("<td><a href='" + editLink + "'>View</a>");
//                 $(this).append("<td printf><a href='" + editLink.replace(/o=r/, 'o=u') + "'>Edit</a>");
//             });
//         }

//     } //Ends Computer pages else
//         else if ( $( 'li:contains("Smart Mobile Device Groups")').length ) {
//             if( $( "h2:contains('Advanced Mobile Device Searches')").length ) {

//                 //Experimental 'new' button replacement on advanced search
//                 $(".standardDataTable thead tr").append("<th class='header'>Details</th><th class='header'>Edit</th>");
//                 $('h2').insertBefore("#content-inside form");
//                 $('#table-top').hide();
//                 $('.standardDataTable tbody tr').each(function() {
//                     var editLink = $(this).find('.view').attr('href');
//                     var viewLink = editLink.replace(/o=r/, 'o=v');
//                     $(this).find('.view').attr('href',viewLink);
//                     $(this).append("<td printf><a href='" + editLink + "'>View</a>");
//                     $(this).append("<td printf><a class='cancelButton' href='" + editLink + "'>Edit</a>");
//                 });

//             }
//             $('#sidebar-nav li:contains("Search Inventory")').after(advMobileSearchURL);
//             $('#sidebar-nav').append(extensionsMobileURL);
//         }

//         if ( $( 'li:contains("Smart User Groups")').length ) {
//             $('#sidebar-nav li:contains("Search Users")').after(allUsersURL,advUserSearchURL);
//             $('#sidebar-nav').append(JSSusersURL);
//         }


//     // Corrects dashboard page style
//     if ( $("#dashboard-header").length ) {

//     }

//     //Everywhere else
//     else {
//         $('#sidebar-nav').append(divider,settingsURL);
//         // Makes sidebar navigation & logo fixed position
//         $('#sidebar-nav, #logo-dash').addClass( "sidebar-whole" );

//         // Makes Sidebar expandable
//         $(function(){
//             $('.sidebar-whole').click(function(){
//                 $('.sidebar-whole').toggle();
//                 $('#navigation').css( 'left','28px' );
//                 $('#content-inside').css('margin-left','15px');
//                 $('#sites-link').css('margin-left', '15px');
//                 $('.expandButton').css('display','inline');
//                 $('#footer').css('display','none');
//             });
//             $('.sidebar-whole a').click(function(e){
//                 e.stopPropagation();
//             });
//             $('.expandButton').click(function(){
//                 $('.sidebar-whole').toggle();
//                 $('#navigation').css( 'left','236px');
//                 $('#content-inside').css('margin-left','236px');
//                 $('#site-links').css('margin-top','15px');
//                 $('#sites-link').css('margin-left', 'auto');
//                 $('.expandButton').css('display','none');
//                 if($(window).height() > 400) {
//                     $('#footer').css('display','block');
//                 }
//             });
//         });

//         if( $("#Display_Pane").length && $("input#save-button").length) {
//             var checkAllButton = "<input type='button' id='checkAllButton' class='cancelButton' value='Check All'>";
//             var clearAllButton = "<input type='button' id='clearAllButton' class='cancelButton' value='Clear All'>";
//             $('#displayFieldsPane7').after(checkAllButton, clearAllButton);
//             $("input#checkAllButton").click(function(){
//                 $('input#FIELD_DISPLAY').filter(":visible").not(this).prop('checked', true);
//             });
//             $("input#clearAllButton").click(function(){
//                 $('input#FIELD_DISPLAY').filter(":visible").not(this).prop('checked', false);
//             });
//         }

//         $(window).on('resize', function(){
//             var win = $(this); //this = window
//             if (win.height() >= 400) {
//                 $('#footer').css('display','block');
//             }
//             else {
//                 $('#footer').css('display',"none");
//             }
//         });

//     }

// }
