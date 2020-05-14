import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  viagens = [
    {
      local: "Madrid",
      descricao: "Madri, a capital da Espanha, situada no centro do país, é uma cidade de avenidas elegantes e parques grandes e bem cuidados, como o Buen Retiro. Ela é famosa pelos ricos acervos de arte europeia, entre os quais estão as obras de Goya, Velázquez e outros mestres espanhóis no Museu do Prado. O centro da antiga Madri da época da Casa de Habsburgo é a Plaza Mayor, ladeada por pórticos, e nas proximidades ficam o barroco Palácio Real e o Arsenal Real, que exibe armas históricas.",
      data: "10/01/2022",
      img: "https://www.google.com/search?q=madrid&sxsrf=ALeKk008S0Dt7kzs4MO0_Y7jAWgRixgpCA:1589424825254&tbm=isch&source=iu&ictx=1&fir=2YdbmmLxLJvNdM%253A%252CX60-mWYrJYsjlM%252C%252Fm%252F056_y&vet=1&usg=AI4_-kSOUEJddBDDphunGPxoiRrtyiGP6g&sa=X&ved=2ahUKEwiQwOzwrLLpAhVGGbkGHZC0BgIQ_B0wJHoECAIQAw#imgrc=2YdbmmLxLJvNdM:"
    },
    {
      local: "Gramado",
      descricao: "Gramado é um município do estado do Rio Grande do Sul, no Brasil. Localiza-se na Serra Gaúcha, mais precisamente na Região das Hortênsias, a uma latitude 29º 22' 44 oeste, estando a uma altitude de 830 metros. Sua população estimada em 2018 é de 35.875 habitantes.[3] Possui uma área de 237,019 quilômetros quadrados. Seu principal acesso se dá através da RS-115, embora também seja atendida pelas rodovias RS-235 e RS-373",
      data: "10/01/2023",
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.melhoresdestinos.com.br%2Fwp-content%2Fuploads%2F2019%2F02%2Fpassagens-aereas-gramado-capa2019-04-820x430.jpg&imgrefurl=https%3A%2F%2Fwww.melhoresdestinos.com.br%2Fgramado-reabertura-hoteis.html&tbnid=CFgYUSI0d99E4M&vet=12ahUKEwiKpo2HrLLpAhWiBrkGHQtyBOsQMygAegUIARDrAQ..i&docid=SokPylGSFLcBZM&w=820&h=430&q=gramado&ved=2ahUKEwiKpo2HrLLpAhWiBrkGHQtyBOsQMygAegUIARDrAQ"
    },
    {
      local: "Veneza",
      descricao: "Veneza, a capital da região de Vêneto, no norte da Itália, é formada por mais de 100 pequenas ilhas em uma lagoa no Mar Adriático. A cidade não tem estradas, apenas canais (como a via Grand Canal), repletos de palácios góticos e renascentistas. Na praça central, Piazza San Marco, ficam a Basílica de São Marcos, coberta de mosaicos bizantinos, e o campanário, com vista para os telhados vermelhos da cidade.",
      data: "10/01/2024",
      img: "https://www.google.com/search?q=veneza&sxsrf=ALeKk01QQfHKpwVOoVCzqVizu9r4KJXtmg:1589424727106&tbm=isch&source=iu&ictx=1&fir=7cY-0JxqW_IVjM%253A%252CXy6JNcCk8mvl1M%252C%252Fm%252F07_pf&vet=1&usg=AI4_-kT_F1bjjCW8_ZMxnYFuXz6aslUmlg&sa=X&ved=2ahUKEwiegIbCrLLpAhUZK7kGHaACBCsQ_B0wInoECAcQAw#imgrc=7cY-0JxqW_IVjM:"
    },
    {
      local: "Paris",
      descricao: "Paris, a capital da França, é uma importante cidade europeia e um centro mundial de arte, moda, gastronomia e cultura. Sua paisagem urbana do século XIX é cortada por avenidas largas e pelo rio Sena. A cidade é conhecida por monumentos como a Torre Eiffel e a Catedral de Notre-Dame, uma construção gótica do século XII, sendo famosa também pela cultura dos cafés e por lojas de estilistas famosos na Rue du Faubourg Saint-Honoré.",
      data: "10/01/2025",
      img: "https://www.google.com/search?q=paris&sxsrf=ALeKk01EXHn8adrooEyG59jxNHBcEBBWxw:1589424791752&tbm=isch&source=iu&ictx=1&fir=LJOBm6GtwbbMEM%253A%252C3_NU5n_2uwRO5M%252C%252Fm%252F05qtj&vet=1&usg=AI4_-kTHZCKb_hP66hELdDmuxRDemWv2dw&sa=X&ved=2ahUKEwiZy-_grLLpAhVMH7kGHc-aB0oQ_B0wHnoECAYQAw#imgrc=LJOBm6GtwbbMEM:"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
