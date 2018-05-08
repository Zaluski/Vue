
Vue.filter('doneLabel',function (value) {
    if (value == 0){
        return 'Não Paga';
    }else {
        return 'Paga';
    }
});

Vue.filter('statusGeneral',function (value) {
    if (value === false){
        return "Nenhuma Conta Cadastrada";
    }
    if (!value){
        return "Nenhuma Conta à Pagar";
    }

    else {
        return "Existem " +value+ " contas a serem pagas";

    }


});


var app = new Vue({  // Cria o objeto
    el: "#app", // Informa qual o elemento que irá receber os dados
    data: {
        title: "Contas a Pagar", // Modelo de aplicação, dados
        test: '',
        activedView: 0,
        menus:[
            {id:0, name: "Listar Contas"},
            {id:1, name: "Criar Conta"}
        ],
        formType: 'insert',
        bill: {
            date_due: '',
            name: '',
            value: 0,
            done: false

        },
        names: [
            "Conta de Luz",
            "Conta de Agua",
            "Conta de Telefone",
            "Conta de CC",
            "Conta de Tais",
            "Conta de Pet",
            "Conta de Rafael"
        ],
        bills: [
            {date_due: '19/04/2018', name: "Conta de Luz", value: 223.45, done: true},
            {date_due: '20/04/2018', name: "Conta de Agua", value: 20.45, done: false},
            {date_due: '21/04/2018', name: "Conta de Telefone", value: 123.45, done: false},
            {date_due: '22/04/2018', name: "Conta de CC", value: 3223.45, done: false},
            {date_due: '23/04/2018', name: "Conta de Tais", value: 423.45, done: false},
            {date_due: '24/04/2018', name: "Conta de Pet", value: 723.45, done: false},
            {date_due: '25/04/2018', name: "Conta de Rafael", value: 2223.45, done: true}
        ]
    },

    computed: {
        status: function () {
            if (!this.bills.length){
                return false;
            }
            var count = 0;
            for (var i in this.bills){
                if (!this.bills[i].done){
                    count++;
                }
            }

            return count;

        }
},

    methods:{
        showView: function (id) {
          this.activedView = id;
          if (id == 1){
              this.formType = 'insert';
          }

        },
        submit: function () {

            if (this.formType = 'insert') {
                this.bills.push(this.bill);

            }
            this.bill = {
                date_due: '',
                name: '',
                value: 0,
                done: false
            };
            this.activedView = 0;
        },
        loadBill: function (bill) {
            this.bill = bill;
            console.log(bill);
            this.activedView = 1;
            this.formType = 'update'
        },
        deleteBill: function (bill) {
            if (confirm('Deseja excluir esta conta?')){
                this.bills.$remove(bill);
        }
            }

    }

});

app.$watch('test',function (nValor, vValor) {
   console.log('Velho Valor:'+ vValor+" Novo Valor: "+ nValor);
});