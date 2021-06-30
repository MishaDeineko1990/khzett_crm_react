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

                // $("#my_file_output").html(sCSV);
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

        el = el.replace(/[\[]/g, " ")
        el = el.replace(/[\]]/g, " ")
        el = el.replace(/[\{}]/g, " ")
        el = el.replace(/[\}]/g, " ")
        el = el.replace(/[\()}]/g, " ")
        el = el.replace(/[\)]/g, " ")
        el = el.replace(".,", '. ,');

        el = el.replace(/ м/gi, 'м');
        el = el.replace(" - ", '-');
        el = el.replace(" -", '-');
        el = el.replace("- ", '-');
        el = el.replace(/х/gi, '*');
        

        el = el.replace(/[²]/g, "І")
        el = el.replace(/[¿]/g, "ї")
        el = el.replace(/[º]/g, "є")
        el = el.replace(/[÷]/g, "ч")
        el = el.replace(/[¯]/g, "Ї")
        el = el.replace(/[²]/g, "І")
        el = el.replace(/[ª]/g, "Є")
        el = el.replace(/[×]/g, "Ч")
        el = el.replace(/\s\s+/g, ' ');
        
        return el    
  
    }




















    
    function buld_table (data){


        // for (let index = 0; index < 1024; index++) {
        //    console.log(index); 
        
        // }

         let arr_supp = []
         let check_empty = 0

        data.forEach(its=>{    
            
            // console.log(its);
            let arr1 = []
            let arr_encode


            if (its.__EMPTY ){

                add_ellemet_to_arrey(its.__EMPTY)

            }
            else{
                add_empty_ellement()
            }

                        if ( its.__EMPTY_1 ){

                            add_ellemet_to_arrey(its.__EMPTY_1)
            
                        }
                        else{
                            add_empty_ellement()
                        }
                          

            if (its.__EMPTY_2 ){

                add_ellemet_to_arrey(its.__EMPTY_2)

            }
            else{
                add_empty_ellement()
            }

                        if (its.__EMPTY_3){

                            add_ellemet_to_arrey(its.__EMPTY_3)
            
                    }
                        else{
                            add_empty_ellement()
                        }

            if (its.__EMPTY_4){

                add_ellemet_to_arrey(its.__EMPTY_4)

            }
            else{
                add_empty_ellement()
            }

                            if (its.__EMPTY_5){

                                add_ellemet_to_arrey(its.__EMPTY_5)
                
                            }
                            else{
                                add_empty_ellement()
                            }

            if (its.__EMPTY_6){

                add_ellemet_to_arrey(its.__EMPTY_6)

            }
            else{
                add_empty_ellement()
            }


            function add_ellemet_to_arrey(data){

                arr_encode = debag_encode(data)
                arr1.push(arr_encode)
                arr_encode = ""

            }




            function add_empty_ellement (){

                if (check_empty==0){
                    arr1.push(" ")
                    check_empty = 1
                }

            }


            
            arr_supp.push(arr1)
            check_empty = 0

            

            // let newSTR = its        
            

            
        })

        let arr_shs_spiral_part = []
        let arr_shs_spiral = []




















        function siparate_auger_screw(data){
            
            data.forEach(its=>{
                if(its[0].includes('Шнекова спіраль')){
                    let temp_ellement = its[0]
                    temp_ellement = temp_ellement.split(/[ ]+/)


                    let cut_spirall_size = temp_ellement[3]
                   
                    cut_spirall_size = cut_spirall_size.split(/[\*]+/)

                    if(cut_spirall_size.length>3){
                        cut_spirall_size = cut_spirall_size.slice(0, 3)
                    }

                    temp_ellement[4] =  parseInt(temp_ellement[4].match(/\d+/))


                    // cheak on left and right

                    if (temp_ellement.includes('ліва'))
                    {
                        temp_ellement[6]= "ліва"
                    }
                    else{
                        temp_ellement[6] = "права"
                    }

                // console.log(temp_ellement[3] +" *** "+ temp_ellement[4] +" *** "+ temp_ellement[5]+" *** "+ temp_ellement[6] )

                // console.log(temp_ellement)
                   
                   


                    arr_shs_spiral_part.push(temp_ellement)
                    
                    arr_shs_spiral_part[0][3] = cut_spirall_size  

                    // console.log(arr_shs_spiral_part)
                }
                else{
                    if (its[0].includes('Кіл-ть') && arr_shs_spiral_part.length>0){
                        arr_shs_spiral_part.push(its[0], its[1], its[2], its[3], its[4], its[5], its[6] )
                        arr_shs_spiral.push(arr_shs_spiral_part)

                        arr_shs_spiral_part = []
                    }
                    else if(its[0].includes("ВИРОБНИЦТВО ГОТОВОЇ ПРОДУКЦІЇ") && arr_shs_spiral_part.length>0 || its[0].includes("Козакевич Надія") && arr_shs_spiral_part.length>0){
                        arr_shs_spiral_part.push("", "", "", "", "",  its[2] )
                        arr_shs_spiral.push(arr_shs_spiral_part)
                        // console.log(its)
                        
                        arr_shs_spiral_part = []
                    }
                    else{
                        arr_shs_spiral_part = []
                    }

                }
                
            })

            out_arrey(arr_shs_spiral)

        }


        
        

        siparate_auger_screw(arr_supp)




        


        function out_arrey(data){

            let finish_arrey = []

            // console.log(data)
            let temp_finish_arrey = new Array(data.length)

            for (let i = 0; i < data.length; i++) {
               
                

                // if (data[i][0][3][0] && data[i][0][3][1] && data[i][0][3][2] && data[i][0][4] && data[i][0][5] && data[i][0][6] && data[i][2] && data[i][4] && data[i][5] && data[i][6]){
                    temp_finish_arrey[i] = [data[i][0][3][0], data[i][0][3][1], data[i][0][3][2], data[i][0][4], data[i][0][5], data[i][0][6], data[i][2], data[i][4], data[i][5], data[i][6]]
                    temp_finish_arrey[i][4] = parseFloat(temp_finish_arrey[i][4].match(/\d+/))
                // } 
                finish_arrey = temp_finish_arrey              
                        
            }  







            // price_create(finish_arrey);
            
            vue_table_resault(finish_arrey)
        }








        function price_create(data){

            let finish_arrey = []

            // console.log(data)
            let temp_finish_arrey = []

            for (let i = 0; i < data.length; i++) {
               
                // console.log("object");
                // console.log(data[i]);
                // console.log("*********************");

                let pi = 3.14159265359

                let leng_iner_line = Math.sqrt((parseInt(data[i][1])*pi)*(parseInt(data[i][1])*pi)+(parseInt(data[i][2])*parseInt(data[i][2])))
                let hight_shtrips = (parseInt(data[i][0])-parseInt(data[i][1]))/2
                let count_elllem_on_metr = 1000/parseInt(data[i][2])
                let leangth_inner_line_on_metr = leng_iner_line * count_elllem_on_metr
                let wight_metall = 0.00786
                let wight_metr_screw_spirall = parseInt(data[i][3]) * hight_shtrips * leangth_inner_line_on_metr * wight_metall 
                
                let price_opt = (wight_metr_screw_spirall /1000) * 1.1 * 50 * 5
                let price_rozdr = (wight_metr_screw_spirall /1000) * 1.1 * 50 * 6

                price_opt = parseInt(price_opt)
                price_rozdr = parseInt(price_rozdr)
                
                

                let sp_D = data[i][0];
                let sp_d = data[i][1];
                let sp_p = data[i][2];
                let sp_S = data[i][3];
                let sp_L = data[i][4];
                let liva = "ліва"
                let navivka = ""
                let navivka_eng = ""

                if (data[i][5].trim() === liva.trim()){
                    navivka = "ліва"
                    navivka_eng = "L"
                }
                else{
                    navivka = "права"
                    navivka_eng = "R"
                }

                // let name_spirall = "Шнекова спіраль цільнотянута Agro Helix" + " (D - " + sp_D + "мм., d - " + sp_d + "мм., p - " + sp_p + "мм., S - " + sp_S + "мм. " + navivka + " "
                let name_spirall = "Шнекова спіраль цільнотянута Agro Helix "
                
                // let articul = "" + sp_D +  sp_d +  sp_p + sp_S +  navivka_eng
                let articul2 = "" + sp_D +"*"+  sp_d +"*"+  sp_p +"*"+ sp_S +" L-"+ +" "+  navivka_eng
                 
                
                // console.log("*********************");
                // console.log(data[i][0]);
                // console.log(data[i][1]);
                // console.log(data[i][2]);
                // console.log(data[i][3]);
                // console.log(data[i][4]);
                // console.log(data[i][5]);
                // console.log(data[i][9]);
                // console.log(leng_iner_line);
                // console.log(hight_shtrips)
                // console.log(count_elllem_on_metr)
                // console.log(leangth_inner_line_on_metr)
                // console.log(wight_metr_screw_spirall)
                // console.log(price_opt)
                // console.log(price_rozdr)
                // console.log(name_spirall)
                // console.log(articul)
                // console.log(data[i][5]) //navivka
                // console.log("    "+ articul + "   " + price_opt + "грн.      " + price_rozdr + "грн.           5")
                // console.log(price_rozdr)



                // if (data[i][0][3][0] && data[i][0][3][1] && data[i][0][3][2] && data[i][0][4] && data[i][0][5] && data[i][0][6] && data[i][2] && data[i][4] && data[i][5] && data[i][6]){
                    // temp_finish_arrey[i] = [data[i][0][3][0], data[i][0][3][1], data[i][0][3][2], data[i][0][4], data[i][0][5], data[i][0][6], data[i][2], data[i][4], data[i][5], data[i][6]]
                    // temp_finish_arrey[i][4] = parseFloat(temp_finish_arrey[i][4].match(/\d+/))
                // } 
                // finish_arrey = temp_finish_arrey              
                        
            }  
        }










        function vue_table_resault(data){

            //setup our table array
            var tableArr = [
                ["row 1, cell 1", "row 1, cell 2"],
                ["row 2, cell 1", "row 2, cell 2"]
            ]


            //create a Table Object
            let table = document.createElement('table');

            
            //iterate over every array(row) within tableArr
            for (let row of data) {
            //Insert a new row element into the table element
                table.insertRow();
            //Iterate over every index(cell) in each array(row)
                for (let cell of row) {
            //While iterating over the index(cell)
            //insert a cell into the table element
                let newCell = table.rows[table.rows.length - 1].insertCell();
            //add text to the created cell element
                newCell.textContent = cell;
                }
            }
            //append the compiled table to the DOM
            // document.body.appendChild(table);

            table.classList.add('table');

            $("#my_file_output").html(table);

        }

        // finish_arrey = finish_arrey.filter(function(item, pos, self) {
        //     return self.indexOf(item) == pos;
        // })






        // console.log(finish_arrey)

        
// 
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

