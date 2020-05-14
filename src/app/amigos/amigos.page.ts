import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  amigos = [
    {
      nome: "Fernando",
      idade: "23",
      level: 5
    },
    {
      nome: "Felipedio",
      idade: "25",
      level: 4
    },
    {
      nome: "Marcelo",
      idade: "25",
      level: 4
    },
    {
      nome: "Nayara",
      idade: "28",
      level: 4
    },
    {
      nome: "Marcos",
      idade: "21",
      level: 3
    },
    {
      nome: "Daniel",
      idade: "21",
      level: 5
    },
    {
      nome: "Elisangela",
      idade: "28",
      level: 5
    },



  ]

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async deleteAmigosTela(nome: string) {
    let buttons = [
      {
        text: "Deletar", role: "destructive",
        handler: () => {
          this.deleteAmigo(nome);
        }
      },
      { text: "Editar" },
      { text: "Cancelar", role: "cancel" }
    ];

    const actionSheet = await this.actionSheetController.create({
      header: "Ações",
      buttons: buttons
    });

    await actionSheet.present();
  }
  deleteAmigo(nome: string) {
    this.amigos.forEach((item, index) => {
      if (item.nome === nome) this.amigos.splice(index, 1);
    })
  }
}
