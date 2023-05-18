<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #EFE8F7; padding: 3rem 0; font-family: Sans-Serif">
  <tr>
  <td width="100%" align="center" style="padding: 0 1rem">
      <table width="600" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
          <td width="600" align="center">
          <div style="background: #D8759E; color: white; width: 100%; max-width: 640px;">
              <header style="background: #F8F3F5; padding: 1rem;">
                  <!-- <img src="<?= get_template_directory_uri() ?>@/assets/images/CariciaLogoGray.png" style="width: 100px;">-->

              <div style="padding: 1rem;">
                  <h1 style="font-size: 25px; color: white;">Gracias por su reserva</h1>

                  <table style="width: 100%; padding-left: 1.5rem">          
                      <tbody style="width: 100%">
                          <tr>
                              <td style="padding: 10px 0; width: 30%; font-weight: bold; color: white; font-weight:bold">Al nombre de: </td>
                              <td style="padding: 10px 0; color: white;"><?= $data['nombre'] ?></td>   
                          </tr>
                          <tr>
                            <td style="padding: 10px 0; width: 30%; font-weight: bold; color: white; font-weight:bold">Servicio(s): </td>
                            <td style="padding: 10px 0; color: white;"><?= $data['servicio'] ?></td>   
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; width: 30%; font-weight: bold; color: white; font-weight:bold">Fecha: </td>
                          <td style="padding: 10px 0; color: white;"><?= $data['reserva'] ?></td>   
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; width: 30%; font-weight: bold; color: white; font-weight:bold">A la Hora: </td>
                        <td style="padding: 10px 0; color: white;"><?= $data['hora'] ?></td>   
                    </tr>
                    <td style="padding: 10px 0; width: 30%; font-weight: bold; color: white; font-weight:bold">En la sucursal: </td>
                        <td style="padding: 10px 0; color: white;"><?= $data['sucursal'] ?></td>   
                    </tr>
                      </tbody>
                  </table>
              </div>
              <h1 style="font-size: 18px; color: white;">¡Le esperamos!</h1>
              <h1 style="font-size: 15px; color: white;">Si quiere cancelar su cita porfavor contactenos al ****</h1>


              <footer style="text-align: center; font-size: 12px; font-family: Sans-Serif; padding: 1rem; color: #white; background: #DCACBC;">
                  All rights reserved - Caricia SPA
              </footer>         
          </div>
          </td>
      </tr>
      </table>
  </td>
  </tr>
</table> 

