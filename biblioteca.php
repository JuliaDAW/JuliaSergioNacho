<?php
    function letra_a_letra($cadena){
        $longitud=mb_strlen($cadena);
        $nueva="";
        for($i=0; $i<($longitud-1); $i++){
            $nueva.=mb_substr($cadena, $i, 1);
            $nueva.="-";
        }
        $nueva.=mb_substr($cadena, $longitud-1, 1);
        return $nueva;
    }

    function inicial_nombre($cadena){
        return mb_substr($cadena, 0, 1);
    }
    
    function mostrar_ajedrez(){
        echo "<table style='margin:auto; text-align:center' border='1px solid' cellspacing='0'>";
            echo "<caption> Tablero de Ajedrez </caption>";
            $numero=0;
            $f=0;
            do{
                echo "<tr>";
                $c=0;
                    do{
                        echo "<td>".$f.", ".$c."</td>";
                        $c++;
                        $numero++;
                    } while($c<8);
                echo "</tr>";
                $f++;
            } while ($f<8);
        echo "</table>";
    }

    echo mostrar_ajedrez();
    
?>