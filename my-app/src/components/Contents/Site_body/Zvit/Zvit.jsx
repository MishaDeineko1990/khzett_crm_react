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
                buld_table(oJS)
                // console.log(oJS);
            });
        };

        // Tell JS To Start Reading The File.. You could delay this if desired
        reader.readAsBinaryString(oFile);
    }


    function debag_encode (data){

                
        
                
        let el = data

        let check = {
        é: ["é", "й"], ö: ["ö", "ц"], ó: ["ó", "у"], ê: ["ê", "к"], å: ["å", "е"], í: ["í", "н"], ã: ["ã", "г"], ø: ["ø", "ш"], ù: ["ù", "щ"], ç: ["ç", "з"], õ: ["õ", "х"], ô: ["ô", "ф"], â: ["â", "в"], à: ["à", "а"], ï: ["ï", "п"], ð: ["ð", "р"], î: ["î", "о"], ë: ["ë", "л"], ä: ["ä", "д"], æ: ["æ", "ж"], º: ["º", "є"], ÿ: ["ÿ", "я"], ñ: ["ñ", "с"], ì: ["ì", "м"], è: ["è", "и"], ò: ["ò", "т"], ü: ["ü", "ь"], á: ["á", "б"], þ: ["þ", "ю"], É: ["É", "Й"], Ö: ["Ö", "Ц"], Ó: ["Ó", "У"], Ê: ["Ê", "К"], Å: ["Å", "Е"], Í: ["Í", "Н"], Ã: ["Ã", "Г"], Ø: ["Ø", "Ш"], Ù: ["Ù", "Щ"], Ç: ["Ç", "З"], Õ: ["Õ", "Х"], Ô: ["Ô", "Ф"], Â: ["Â", "В"], À: ["À", "А"], Ï: ["Ï", "П"], Ð: ["Ð", "Р"], Î: ["Î", "О"], Ë: ["Ë", "Л"], Ä: ["Ä", "Д"], Æ: ["Æ", "Ж"], ª: ["ª", "Є"], ß: ["ß", "Я"], Ñ: ["Ñ", "С"], Ì: ["Ì", "М"], È: ["È", "И"], Ò: ["Ò", "Т"], Ü: ["Ü", "Ь"], Á: ["Á", "Б"], Þ: ["Þ", "Ю"]
        }

        el = el.replace(/[éöóêåíãøùçõôâàïðîëäæÿñìèòüáþÉÖÓÊÅÍÃØÙÇÕÔÂÀÏÐÎËÄÆßÑÌÈÒÜÁÞ]/g, (a1) => {        
                  
            if (check[a1]){
                return check[a1][1]
            }
            
        })

        el = el.replace(/[³]/g, "і")
        el = el.replace(/[¿]/g, "ї")
        el = el.replace(/[º]/g, "є")
        el = el.replace(/[÷]/g, "ч")
        el = el.replace(/[¯]/g, "Ї")
        el = el.replace(/[²]/g, "І")
        el = el.replace(/[ª]/g, "Є")
        el = el.replace(/[×]/g, "Ч")
        el = el.replace(/[  ]/g, " ")
        
        return el    
  
    }

    
    function buld_table (data){


        // for (let index = 0; index < 1024; index++) {
        //    console.log(index); 
        
        // }

         let arr_supp = []

        data.forEach(its=>{    
            
            // console.log(its);
            let arr1 = []
            let arr_encode





            if (its.__EMPTY){

                arr_encode = debag_encode(its.__EMPTY)
                arr1.push(arr_encode)
                arr_encode = ""
            }
            else{
                arr1.push(" ")
            }

            
            
            
            // if (its.__EMPTY_1){
            //     arr1.push(its.__EMPTY_1)
            // }
            // else{
            //     arr1.push(" ")
            // }

            
            
            
            
            // if (its.__EMPTY_2){
            //     arr1.push(its.__EMPTY_2)
            // }
            // else{
            //     arr1.push(" ")
            // }
            



            // if (its.__EMPTY_3){
            //     arr1.push(its.__EMPTY_3)
            // }
            // else{
            //     arr1.push(" ")
            // }
            



            // if (its.__EMPTY_4){
            //     arr1.push(its.__EMPTY_4)
            // }
            // else{
            //     arr1.push(" ")
            // }




            // if (its.__EMPTY_5){
            //     arr1.push(its.__EMPTY_5)
            // }
            // else{
            //     arr1.push(" ")
            // }
            
            // console.log(arr1)

                









            
            arr_supp.push(arr1)

            

            // let newSTR = its        
            

            
        })

        console.log(arr_supp)

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

