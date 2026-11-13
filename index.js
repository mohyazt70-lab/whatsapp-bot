const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true, args: ['--no-sandbox','--disable-setuid-sandbox'] }
});
client.on('qr', qr => { qrcode.generate(qr, {small: true}); });
client.on('ready', () => { console.log('البوت اشتغل'); });
client.on('message', async msg => {
    const text = msg.body.trim();
    if (text === 'hi' || text === 'ازيك') {
        msg.reply('اهلا بيك نورتنا ❤️\nاكتب 1 للاسعار\nاكتب 2 للعنوان\nاكتب 3 لعمل طلب');
    } else if (text === '1') {
        msg.reply('اسعارنا:\n- المنتج الاول: 250 جنيه\n- المنتج التاني: 400 جنيه');
    } else if (text === '2') {
        msg.reply('عنوانا: القاهرة - وسط البلد');
    } else if (text === '3') {
        msg.reply('ابعت اسمك وعنوانك ورقم تليفونك وهنكلمك نأكد الطلب ❤️');
    }
});
client.initialize();
