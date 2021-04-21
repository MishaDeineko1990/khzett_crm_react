// import React from 'react';
// import s from './Correspondence.module.css';
// import Dialogs from './Dialogs/Dialogs';
// import Mes from './Mes/Mes';

import React from 'react';
import s from './Zvit.module.css';
import {NavLink} from "react-router-dom"
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Wrapp_zvit from './Wrapp_zvit/Wrapp_zvit';
import XLSX from 'xlsx';
import XLS from 'xlsx';


const Zvit = () =>{



            

    var oFileIn;

    $(function() {
        oFileIn = document.getElementById('my_file_input');
        if(oFileIn.addEventListener) {
            oFileIn.addEventListener('change', filePicked, false);
        }
    });
    
    
    function filePicked(oEvent) {
        // Get The File From The Input
        var oFile = oEvent.target.files[0];
        var sFilename = oFile.name;
        // Create A File Reader HTML5
        var reader = new FileReader();
    
        // Ready The Event For When A File Gets Selected
        reader.onload = function(e) {
            var data = e.target.result;
            var cfb = XLS.CFB.read(data, {type: 'binary'});
            var wb = XLS.parse_xlscfb(cfb);
            // Loop Over Each Sheet
            wb.SheetNames.forEach(function(sheetName) {
                // Obtain The Current Row As CSV
                var sCSV = XLS.utils.make_csv(wb.Sheets[sheetName]);   
                var oJS = XLS.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);   
    
                $("#my_file_output").html(sCSV);
                console.log(oJS)
            });
        };
    
        // Tell JS To Start Reading The File.. You could delay this if desired
        reader.readAsBinaryString(oFile);
    }







    return (
        <div>
            <div>    
                <NavLink to ="/Zvit/Wrapp_zvit">Shov zvit</NavLink>
                <span></span>

            </div>                

            <div>
                <input type="file" id="my_file_input" />                
            </div>

            <Wrapp_zvit/>

            <div id='my_file_output'></div> 


            
        </div>


    )



}

export default Zvit;

