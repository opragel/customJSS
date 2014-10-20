// ==UserScript==
// @name       Owen's JSS Customizations - Generic
// @namespace  https://jss.
// @version    0.1
// @description  JSS customizations - Generic
// @include      https://jss.*
// @copyright  2014, Owen Pragel
// ==/UserScript==

// - Intro/Disclaimer
// Last tested with JSS version 9.6
// Disclaimer: Script is presented as-is, use at your own risk.

//// Changes
// Numerous restylings
// Sidebar modifications
//  - Additions
//  - removals/reordering
//  - Settings goes to all settings page
// Saved searches & group links go to search page, edit button added
// Policies have shortcut link to logs
// Shrink/expand settings categories

var jssURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname // URL of your JSS (w/ trailing slash)
var customFileDirectory='http://owen-74bit.github.io/customJSS/custom/' // URL of directory w/ custom files
var customLogoURL=customFileDirectory + 'osimp.png'
var customCSSURL=customFileDirectory + 'customJSS.css'

// Link to default JSS font (default Roboto)
var font="<link href='https://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet' type='text/css'>";
var customCSS="<link href='" + customCSSURL + "' rel='stylesheet' type='text/css'>";

var createMenuItem = function( 	url, displayName ) {
    return '<li class=" "><a href="' + url + '">' + displayName + '</a></li>';
};
 
var createMenuItemID = function( url, displayName, id ) {
    return '<li class=" " id="' + id + '"><a href="' + url + '">' + displayName + '</a></li>';
};

// Adds font & CSS to header
$('head').append(font + customCSS);

$('#settings').attr('class','');

// Change header/logo style
$('#logo-dash .hidemobile').attr("src", customLogoURL);

// - Login changes
var ologo="<img src='" + customLogoURL + "' id='simplogo' alt='JAMF JSS'>";
if ($('#login-panel').length) {
    $('#login-wrapper').prepend(ologo);
    $('#emptyVerticalCenteringFloat, #login-icon, #copyright-text').remove();
}

else {    
    var scriptURL = createMenuItem( "scripts.html", "Scripts" );
    var packagesURL = createMenuItem( "packages.html", "Packages" );
    var extensionsURL = createMenuItem( "computerExtensionAttributes.html", "Extension Attributes" );
    var settingsURL = createMenuItemID( "settings.html", "Settings", "settingsconsole");
    var advCompSearchURL = createMenuItemID( "advancedComputerSearches.html?id=-1&o=c", "Advanced Search", "advancedSearch");
    var policiesURL = createMenuItemID( "policies.html", "Policies", "policies");
    var printersURL = createMenuItem( "printers.html", "Printers");
    var accountsURL = createMenuItem( "accounts.html", "JSS Accounts");
    var computersURL = createMenuItem( "computers.html", "Computers");
    var mobileURL = createMenuItem( "mobileDevices.html", "Mobile Devices");
    var divider = "<li class='divider'></li>";
      
    // Sidebar
    $('#sidebar-nav,#logo-dash').addClass('sidebar-whole');//Groups sidebar elements 
    // Adds buttons for expanding sidebar
    $('#site-links').prepend("<img class='expandButton' id='bottomExpandButton' src='" + jssURL + "images/navigation/arrow-active.png'><img class='expandButton' id='topExpandButton' src='" + jssURL + "images/navigation/arrow-active.png'>");
    
    $('#settings').attr('href', 'settings.html');

    // Modifies spacing on form wrappers, h2s
    $( 'li:contains("Management Settings")').remove();
    $( '.searchLabel').remove();   
    // - Setting Pages
    if ( $( "li:contains('JSS Information')").length ) {
        // Adds links to sidebar
        $("#sidebar-nav").prepend(computersURL,mobileURL,divider);
        $('#sidebar-nav').append(accountsURL,divider,extensionsURL,packagesURL,printersURL,policiesURL,scriptURL,divider,settingsURL);
        // Makes settings sections expandable & adds a little arrow
        $(".settings-row h5").append("<img src='" + jssURL + "images/navigation/down-arrow.png' width='9px' height='8px' alt='Expand'>");
        $(function(){
            $('.settings-row').click(function(){
                $(this).find('ul').toggle();
            });
            $('.settings-row .settings-item, .settings-row .summary-item input, .settings-row .check').click(function(e){
                e.stopPropagation();
            });
        });
        
    }
    
    // - Computer Pages
    else if ( $( 'li:contains("Managed Preferences")').length ) {
        // Adds links to the sidebar
        $('#sidebar-nav li:contains("Search Inventory")').after(advCompSearchURL);
        $('#sidebar-nav').append(extensionsURL,packagesURL,printersURL,scriptURL,divider,settingsURL);
        
        // Dividers to hide
        $('li:contains("Enrollment Invitations")').next('.divider').remove();
        
        // Policies style changes
        if( $( 'h2:contains("Policies")').length ) {
            $('.policiesTable.dataTable thead tr').append("<th class='header' style='width: 15px;'></th>");
            $('.policiesTable.dataTable tbody tr:not(".group")').each(function() {
                var computerLink = $(this).find('td a').attr('href');
                computerLink = computerLink.replace(/o=r/, 'o=l');
                $(this).append("<td style='width:15px;'><a class='cancelButton' href='" + computerLink + "'>Logs</a>");
            });
        }
        
        // Advanced Computer changes
        if( $( "h2:contains('Advanced Computer Searches')").length ) {
            $(".search-wrapper").append("<a id='advSearch' href='advancedComputerSearches.html?id=-1&amp;o=c'>Advanced Search</a>");
            $("h2").insertBefore("#content-inside form");
            $("#table-top").hide();
            $("#DataTables_Table_0 thead tr").append("<th class='header' style='width: 15px; border-left: 0;'></th>");
            $('#DataTables_Table_0 tbody tr').each(function() {
                var editLink = $(this).find(".view").attr("href");
                var viewLink = editLink.replace(/o=r/, "o=v");
                $(this).find(".view").attr("href",viewLink);
                $(this).append("<td style='width:15px;'><a href='" + editLink.replace(/o=r/, "o=u") + "'>Edit</a>");
            });
            
        }
        
        // Computer Groups changes
        if( $( "h2:contains('Computer Groups')").length ) {
            $(".standardDataTable thead tr").append("<th class='header'></th>");
            $('.standardDataTable tbody tr').each(function() {
                var editLink = $(this).find(".view").attr("href");
                var viewLink = editLink.replace(/o=r/, "o=v");
                $(this).find(".view").attr("href",viewLink);
                $(this).append("<td style='width:15px;'><a class='cancelButton' href='" + editLink + "'>Edit</a>");
            });
        }
        
    } //Ends Computer pages else
        
        // - Mobile Pages
        else {
            $( "#sidebar-nav").append(settingsURL);
            if( $( "h2:contains('Advanced Mobile Device Searches')").length ) {
                //Experimental 'new' button replacement on advanced search
                $(".search-wrapper").append("<a id='advSearch' href='advancedMobileDeviceSearches.html?id=-1&o=c'>Advanced Search</a>");
                $("h2").insertBefore("#content-inside form");
                $("#table-top").hide();
                $(".standardDataTable thead tr").append("<th class='header'></th>");
                $('.standardDataTable tbody tr').each(function() {
                    var editLink = $(this).find(".view").attr("href");
                    var viewLink = editLink.replace(/o=r/, "o=v");
                    $(this).find(".view").attr("href",viewLink);
                    $(this).append("<td style='width:15px;'><a class='cancelButton' href='" + editLink + "'>Edit</a>");
                });
                
            }
            
            if( $('h2:contains("Device Groups")').length) {
                $('.standardDataTable thead tr').append("<th class='header'></th>");
                $('.standardDataTable tbody tr').each(function() {
                    var editLink = $(this).find(".view").attr("href");
                    var viewLink = editLink.replace(/o=r/, "o=v");
                    $(this).find(".view").attr("href",viewLink);
                    $(this).append("<td style='width:15px;'><a class='cancelButton' href='" + editLink + "'>Edit</a>");
                });
        }
    
        }
    
    // Corrects dashboard page style
    if ( $("#dashboard-header").length ) {

    }
    
    //Everywhere else
    else {
        // Makes sidebar navigation & logo fixed position
        $('#sidebar-nav, #logo-dash').addClass( "sidebar-whole" );
        
        // Makes Sidebar expandable
        $(function(){     
            $('.sidebar-whole').click(function(){         
                $('.sidebar-whole').toggle();
                $('#navigation').css( "left","28px" );
                $('#content-inside').css("margin-left","15px");
                $('#sites-link').css("margin-left", "15px");
                $('.expandButton').css("display","inline");
                $('#footer').css("display","none");
            });
            $('.sidebar-whole a').click(function(e){
                e.stopPropagation(); 
            });
            $('.expandButton').click(function(){
                $('.sidebar-whole').toggle();
                $('#navigation').css( "left","236px");
                $('#content-inside').css("margin-left","236px");
                $('#site-links').css("margin-top","15px");
                $('#sites-link').css("margin-left", "auto");
                $('.expandButton').css("display","none");
                if($(window).height() > 400) {
                    $('#footer').css("display","block");
                }
            });
        }); 
        
        $(window).on('resize', function(){
            var win = $(this); //this = window
            if (win.height() >= 400) {
                $('#footer').css("display","block");
            }
            else {
                $('#footer').css("display","none");
            }
        });
        
    }
    
}
