function code_output() {

//////////////////////////////////////// TEXTAREAS VALUES ////////////////////////////////////////

  var sHTML_Input = document.getElementById("html_inputs").value;     // takes html textarea value
  var sCSS_Input = document.getElementById("css_inputs").value;    // takes css textarea value
  var sJS_Input = document.getElementById("js_inputs").value;    // javascript textarea value

//////////////////////////////////////// CODE OUTPUT ////////////////////////////////////////

  var sPageOutput = document.getElementById("output_result").innerHTML = sHTML_Input + "<style>" + sCSS_Input + "</style>" + " " + "<script>" + sJS_Input + "</script>";

  var sHiddenHTML = document.getElementById("hidden_html").innerHTML = sHTML_Input;

//////////////////////////////////////// OUTPUT VALUES ////////////////////////////////////////

  var iOutputLength = document.getElementById("text_length").innerHTML = $.trim($("#hidden_html").text()).length; // Sends html trimmed length

  var iMaxChars = document.getElementById("char_max_number").value; // Get max HTML chars trimmed caharacters

  var iPercentBar = document.getElementById("progress").value = (iOutputLength / iMaxChars) * 100; // Sends calc value to progress bar

//////////////////////////////////////// OUTPUT VALUES ////////////////////////////////////////

  var iMaxLength = document.getElementById("html_inputs").maxLength = iMaxChars; // Modifies HTML max chars on the fly

    // console.log(iOutputLength);
    // console.log(iMaxChars);
    // console.log(iPercentBar);
    // console.log(iMaxLength);

}

function bold_text(){

  var target = document.getElementById("html_inputs");

  if( target.style.fontWeight == "bolder" ) {

      target.style.fontWeight = "normal";

  } else {

      target.style.fontWeight = "bolder";
  }

}



function add_h1() {
  var sNewText = "<h1></h1>"
  document.getElementById("html_inputs").innerHTML += sNewText;
}

function add_h2() {
  var sNewText = "<h2></h2>"
  document.getElementById("html_inputs").innerHTML += sNewText;
}

function add_h3() {
  var sNewText = "<h3></h3>"
  document.getElementById("html_inputs").innerHTML += sNewText;
}

function add_h4() {
  var sNewText = "<h4></h4>"
  document.getElementById("html_inputs").innerHTML += sNewText;
}

function add_h5() {
  var sNewText = "<h5></h5>"
  document.getElementById("html_inputs").innerHTML += sNewText;
}

function add_h6() {
  var sNewText = "<h6></h6>"
  document.getElementById("html_inputs").innerHTML += sNewText;
}