function calc_box(){if("function"!=typeof window.parent.WPBOX_REC_FRAME)return $(".main,#statement").html(""),"";var t=window.parent.WPBOX_REC_FRAME();return btoa(t)}function array2int(t){for(var a=[],n=0;n<t.length;n++)a.push(FORMAT_SYM(t[n]));return a}function calc(){$("#email_ini").val(0);var t=$("#form-data").serialize()+"&pl="+calc_box();$(".calc-load").show(),$.ajax({url:"https://wppluginbox.com/smart-loan-calculator-api/VS_LITE/index.php",type:"POST",data:t,cache:!1}).done(function(t){$(".calc-load").hide();var a=JSON.parse(t);$("#amortize-table").html(a.tab),$("#statement").show("slow");var n=array2int(a.CHART.axis),e=array2int(a.CHART.balance),o=array2int(a.CHART.interest),t=array2int(a.CHART.payment);wpbox_create_line(n,e,o,t),$("#monthly-pay").text(a.monthly_1st),$("#interest_1st").text(a.interest_1st),$("#years-to-pay").text(FORMAT_SYM($('[name="C3"]').val()));t=FORMAT_SYM(a.T_PRINCIPAL),o=FORMAT_SYM(a.T_INTEREST),a=FORMAT_SYM(a.T_PAYMENTS);wpbox_create_donut(t,o,a)})}$(document).on("click",".detail-show",function(){$("#details-div").toggle("slow")}),$(document).ready(function(){calc()});