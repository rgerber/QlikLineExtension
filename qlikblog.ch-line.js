define( ["qlik", "text!./qlikblog.ch-line.css"],
	function ( qlik, cssContent ) {
		'use strict';
		$( '<style>' ).html(cssContent).appendTo( 'head' );
		
		return {
			initialProperties: {
				qListObjectDef: {
				}
			},
			definition: {
				type: "items",
				component: "accordion",
				items: {
					appearance: {
						component: "expandable-items",
						label: "Line Settings",
						items: {
							linesettings: {
								type: "items",
								label: "Line properties",
								items: {
									width: {
										ref: "width",
										label: "Width (in px)",
										type: "integer",
										defaultValue: "3"
									},
									ColorPicker: {
										label:"Color",
										component: "color-picker",
										ref: "color",
										type: "object",
										defaultValue: {
											color: "#6b777b",
											index: "-1"
										}
									},
									selection: {
										type: "string",
										component: "dropdown",
										label: "Style",
										ref: "style",
										options: [{
											value: "solid",
											label: "Solid"
										}, {
											value: "dotted",
											label: "Dotted"
										}, {
											value: "dashed",
											label: "Dashed"
										}, {
											value: "double",
											label: "Double"
										}]
									},
									orientation: {
										type: "string",
										component: "dropdown",
										label: "Orientation",
										ref: "orientation",
										options: [{
											value: "vertical",
											label: "Vertical"
										}, {
											value: "horizontal",
											label: "Horizontal"
										}]
									}
								}
							},
							abouttxt:{
								label: "About Line",
								type: "items",
								items: {
									abouttxt2:{
										label: "About",
										type: "items",
										items: {
											aboutt:{
											component: "text",
											label: "Version 1.0.1 developed by Renato Gerber / qlikblog.ch"
											}
										}
									}
								}
							}
						}
					}
				}
			},
			support: {
				snapshot: false,
				export: false,
				exportData: false
			},
			paint: function ( $element, layout ) {
				var self = this, html = "", style;
				
				html = "";
				if( layout.orientation == 'vertical') {
					html = '<div class="qlikblog-line-div" ><table class="qlikblog-line-table-vertical" style="width:' + layout.width +'px; border-left-width: ' + layout.width + 'px; border-left-style: ' + layout.style + '; border-left-color: ' + layout.color.color + ';"><tr><td>&nbsp;</td></tr></table></div>';
				} else {
					html = '<div class="qlikblog-line-div" style="position: absolute; top: 50%; display: table-cell; vertical-align: middle;" ><table class="qlikblog-line-table-horizontal" style="position: relative; #top: -50%; margin-top: -' + layout.width + 'px; height:' + layout.width +'px; border-top-width: ' + layout.width + 'px; border-top-style: ' + layout.style + '; border-top-color: ' + layout.color.color +';"><tr><td>&nbsp;</td></tr></table></div>';
				}
				$element.html( html );
				return qlik.Promise.resolve();
			}
		};
	} );
