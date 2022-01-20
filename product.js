var Data = [
    {
        ID: "01",
        JenisToko: "assets/images/ic_os.png",
        NamaToko: "KIZARU WORLD",
        KotaToko: "Kota Bandung",
        Produk: [
            {
                ID: "01",
                ImgProduk: "assets/images/product/Kaos Pria Kizaru T-Shirt Anime Onodera NTR VICTIM.jpg",
                NamaProduk: "Kaos Pria Kizaru T-Shirt Anime Onodera NTR VICTIM",
                HargaProduk: 179000,
                Diskon: 58
            }, {
                ID: "02",
                ImgProduk: "assets/images/product/KIZARU - Masker Kain 2 Layer Adjustable SCRABBLE.jpg",
                NamaProduk: "KIZARU - Masker Kain 2 Layer Adjustable SCRABBLE",
                HargaProduk: 50000,
                Diskon: 50
            }, {
                ID: "03",
                ImgProduk: "assets/images/product/Kaos Pria Kizaru T-Shirt Anime One Piece Yamato.jpg",
                NamaProduk: "Kaos Pria Kizaru T-Shirt Anime One Piece Yamato",
                HargaProduk: 179000,
                Diskon: 50
            }
        ]
    }, {
        ID: "02",
        JenisToko: "assets/images/ic_pro.png",
        NamaToko: "Woitaku",
        KotaToko: "Kota Medan",
        Produk: [
            {
                ID: "01",
                ImgProduk: "assets/images/product/Case Handphone Premium Papa Zhongli - Genshin Impact.jpg",
                NamaProduk: "Case Handphone Premium Papa Zhongli - Genshin Impact",
                HargaProduk: 138000,
                Diskon: 30
            }
        ]
    }, {
        ID: "03",
        JenisToko: "assets/images/ic_os.png",
        NamaToko: "Fantech Official Store",
        KotaToko: "Jakarta Barat",
        Produk: [
            {
                ID: "01",
                ImgProduk: "assets/images/product/Fantech Mousepad Gaming VIGIL MP292 SMALL.jpg",
                NamaProduk: "Fantech Mousepad Gaming VIGIL MP292 SMALL",
                HargaProduk: 49000,
                Diskon: 41
            }, {
                ID: "02",
                ImgProduk: "assets/images/product/Fantech JADE MH84 Headset Gaming Mobile RGB.jpg",
                NamaProduk: "Fantech JADE MH84 Headset Gaming Mobile RGB",
                HargaProduk: 499000,
                Diskon: 50
            }
        ]
    }, {
        ID: "04",
        JenisToko: "assets/images/ic_pro.png",
        NamaToko: "KyraMerch",
        KotaToko: "Kab. Sleman",
        Produk: [
            {
                ID: "01",
                ImgProduk: "assets/images/product/Keychain Genshin Impact Yae Miko.png",
                NamaProduk: "Keychain Genshin Impact Yae Miko",
                HargaProduk: 20000,
                Diskon: 0
            }, {
                ID: "02",
                ImgProduk: "assets/images/product/Keychain Genshin Impact Signora.png",
                NamaProduk: "Keychain Genshin Impact Signora",
                HargaProduk: 20000,
                Diskon: 0
            }
        ]
    }, {
        ID: "05",
        JenisToko: "assets/images/ic_pro.png",
        NamaToko: "3D Toys.id",
        KotaToko: "Kota Medan",
        Produk: [
            {
                ID: "01",
                ImgProduk: "assets/images/product/Valorant Keycaps Reyna Dual Color Set - 9.41mm.jpg",
                NamaProduk: "Valorant Keycaps Reyna Dual Color Set - 9.41mm",
                HargaProduk: 50000,
                Diskon: 0
            }, {
                ID: "02",
                ImgProduk: "assets/images/product/Valorant Keycaps Sage Dual Color Set - 9.41mm.jpg",
                NamaProduk: "Valorant Keycaps Sage Dual Color Set - 9.41mm",
                HargaProduk: 50000,
                Diskon: 0
            }
        ]
    }
]

window
    .localStorage
    .setItem("my_Data", JSON.stringify(Data)); //store

const Div = document.createElement('div');
const DivToko = document.createElement('div');

for (var i = 0; i < Data.length; i++) {

    /* Create CboxToko */
    const CboxToko = document.createElement('input');
    CboxToko.type = 'checkbox';
    CboxToko
        .classList
        .add('form-check-input', 'cbox-big', 'cbox_toko');
    CboxToko.setAttribute('id', 'cbox_toko-' + [i]);
    DivToko.appendChild(CboxToko);

    /* Create Img JenisToko */
    const JenisToko = document.createElement('img');
    JenisToko.src = Data[i].JenisToko;
    JenisToko.width = "20";
    JenisToko.height = "20";
    JenisToko
        .classList
        .add('ml-3');
    DivToko.appendChild(JenisToko);

    /* Create NamaToko */
    const NamaToko = document.createElement('span');
    const T_NamaToko = document.createTextNode(Data[i].NamaToko);
    NamaToko
        .classList
        .add('ml-1');
    NamaToko.appendChild(T_NamaToko);
    DivToko.appendChild(NamaToko);

    /* Create NamaKota */
    const NamaKota = document.createElement('label');
    const T_NamaKota = document.createTextNode(Data[i].KotaToko);
    NamaKota
        .classList
        .add('kota', 'new-line', 'align-kota', 'mb-3')
    NamaKota.appendChild(T_NamaKota);
    DivToko.appendChild(NamaKota);

    for (var j = 0; j < Data[i].Produk.length; j++) {
        const DivCard = document.createElement('div');
        DivCard
            .classList
            .add('card', 'flex-row', 'border-0', 'mb-10');
        const DivProduk = document.createElement('div');
        const DivCardText = document.createElement('div');
        DivCardText
            .classList
            .add('card-text', 'ml-3');
        const DivQty = document.createElement('div');
        DivQty
            .classList
            .add('cart-totals', 'mt-3');

        /* Create CboxProduk */
        const CboxProduk = document.createElement('input');
        CboxProduk.type = 'checkbox';
        CboxProduk
            .classList
            .add('form-check-input', 'cbox-big', 'cbox-list-produk');
        CboxProduk.setAttribute('id', 'cbox');
        CboxProduk.setAttribute('name', 'cbox' + [i]);
        CboxProduk.value = Data[i]
            .Produk[j]
            .HargaProduk;
        CboxProduk.onclick = 'check_cbox'
        DivProduk.appendChild(CboxProduk);

        /* Create GambarProduk */
        const GambarProduk = document.createElement('img');
        GambarProduk.src = Data[i]
            .Produk[j]
            .ImgProduk;
        GambarProduk
            .classList
            .add('img-border');
        GambarProduk.width = "125";
        GambarProduk.height = "125";
        DivProduk.appendChild(GambarProduk);

        /* Create NamaProduk */
        const NamaProduk = document.createElement('h4');
        const T_NamaProduk = document.createTextNode(Data[i].Produk[j].NamaProduk);
        NamaProduk
            .classList
            .add('card-title', 'nama-produk');
        NamaProduk.appendChild(T_NamaProduk);
        DivCardText.appendChild(NamaProduk)

        /* Create IF Diskon */
        if (Data[i].Produk[j].Diskon > 1) {
            /* Create Diskon */
            const Diskon = document.createElement('label');
            const T_Diskon = document.createTextNode(Data[i].Produk[j].Diskon + "%");
            Diskon
                .classList
                .add('discount');
            Diskon.appendChild(T_Diskon);
            DivCardText.appendChild(Diskon);

            /* Create Harga HargaAsli */
            const HargaAsli = document.createElement('s');
            const T_HargaAsli = document.createTextNode(
                'Rp' + Data[i].Produk[j].HargaProduk
            );
            HargaAsli
                .classList
                .add('text-secondary', 'small', 'ml-2');
            HargaAsli.appendChild(T_HargaAsli);
            DivCardText.appendChild(HargaAsli);

            /* Create Harga HargaFinal */
            const HargaFinal = document.createElement('strong');
            var harga = (
                Data[i].Produk[j].HargaProduk - (Data[i].Produk[j].HargaProduk / 100 * Data[i].Produk[j].Diskon)
            );
            const T_HargaFinal = document.createTextNode('Rp' + harga);
            HargaFinal
                .classList
                .add('ml-2');
            HargaFinal.setAttribute('id', 'harga-final')
            CboxProduk.setAttribute('value', harga);

            HargaFinal.appendChild(T_HargaFinal);
            DivCardText.appendChild(HargaFinal);
        } else { //Jika tidak ada diskon
            /* Create HargaFinal */
            const HargaFinal = document.createElement('strong');
            harga = Data[i]
                .Produk[j]
                .HargaProduk;
            const T_HargaFinal = document.createTextNode('Rp' + harga);
            CboxProduk.setAttribute('value', harga);

            HargaFinal.setAttribute('id', 'harga-final')
            HargaFinal.appendChild(T_HargaFinal);
            DivCardText.appendChild(HargaFinal);
        }

        /* Create Space */
        const BtnMinx = document.createElement('br');
        DivQty.appendChild(BtnMinx);

        /* Create Qty */
        const Qty = document.createElement('input')
        Qty.type = 'number'
        Qty.value = '1'
        Qty.min = '1'
        Qty.max = '999'
        Qty
            .classList
            .add('qty-width', 'qty');
        Qty.setAttribute('name', 'qnty1')
        Qty.setAttribute('id', 'qnty2')
        DivQty.appendChild(Qty);

        /* Create BtnDelete */
        const BtnDelete = document.createElement('button');
        const T_BtnDelete = document.createTextNode('Delete');
        BtnDelete
            .classList
            .add('ml-3', 'btn', 'btn-sm', 'btn-danger', 'text-white', 'align-right');
        localStorage.removeItem(Data[i].Produk[i]);
        BtnDelete.appendChild(T_BtnDelete);
        DivQty.appendChild(BtnDelete);

        Div.appendChild(DivToko);
        DivToko.appendChild(DivCard);
        DivCard.appendChild(DivProduk);
        DivCard.appendChild(DivCardText);
        DivCardText.appendChild(DivQty);
    }
}
document
    .getElementById('DivMain')
    .appendChild(Div)
console.log(harga);

$('#select_all').click(function (event) {
    if (this.checked) {
        // Iterate each checkbox
        $(':checkbox').each(function () {
            this.checked = true;
        });
    } else {
        $(':checkbox').each(function () {
            this.checked = false;
        });
    }
});

for (var i = 0; i < Data.length; i++) {
    $('input[type=checkbox][id=cbox_toko-' + [i] + ']').click(function (event) {

        if (this.checked) {
            // Iterate each checkbox
            $('input[type=checkbox][name=cbox' + 0 + ']').each(function () {
                this.checked = true;
            });
        } else {
            $('input[type=checkbox][name=cbox' + 0 + ']').each(function () {
                this.checked = false;
            });
        }
        //input[type=checkbox][name=cbox0]
    });
}

jQuery(document).ready(function ($) {
    $("#form_calc").change(function () {
        var totalPrice = 0,
            cartProduct = [],
            qty = 0;
        $('input[type=checkbox][id=cbox]').each(function () {
            if ($(this).is(':checked')) {
                /* for (var i = 0; i < Data.length; i++) {
                    for (var j = 0; j < Data[i].Produk.length; j++) { */
                $(":input")
                    .on('keyup mouseup', function () {
                        qty = $("[id=qnty2]").val();
                    })
                    .trigger('mouseup');
                /* }
                } */
                cartProduct.push($(this).val()) * qty;
                totalPrice += (parseInt($(this).val())) * qty;
            }
        });
        $("#jumlah_belanja").text('Total Harga (' + (
            cartProduct.length
        ) * qty + ' barang)');
        $("#total_belanja").text('Rp.' + totalPrice);
        $("#total_biaya").text('Rp.' + totalPrice);
        $("#btn_checkout").text('Beli (' + (
            cartProduct.length
        ) * qty + ')');
    });

});