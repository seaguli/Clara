/**
 * @file Random cat, dog and birb posters
 * @author Capuccino
 */

exports.loadAsSubcommands = true;

exports.commands = [
    'chirp',
    'woof',
    'meow',
    'fox',
    'koala',
    'panda',
    'goose',
    'lizard',
];

exports.main = {
    desc: 'Spews out a random image',
    usage: '<woof | meow | chirp | fox | koala | panda | goose | lizard>'
};

exports.chirp = {
    desc: 'Random bird images.',
    async main(bot, ctx) {
        await ctx.channel.sendTyping();

        let res = await got('https://some-random-api.ml/img/birb');
         res = JSON.parse(res.body).link;
        
        if(ctx.author.bot) return;

        await ctx.createMessage({embed: {
            title: 'What a cute little birby!',
            image: {url: res},
            footer: {text: 'Powered by Some Random API'}
        }});
    }
};

exports.fox = {
    desc: 'Random fox images.',
    async main(bot, ctx) {
        await ctx.channel.sendTyping();

        let res = await got('https://some-random-api.ml/img/fox');
         res = JSON.parse(res.body).link;
        
        if(ctx.author.bot) return;

        await ctx.createMessage({embed: {
            title: 'What does the fox say?',
            image: {url: res},
            footer: {text: 'Powered by Some Random API'}
        }});
    }
};

exports.koala = {
    desc: 'Random koala images.',
    async main(bot, ctx) {
        await ctx.channel.sendTyping();

        let res = await got('https://some-random-api.ml/img/koala');
         res = JSON.parse(res.body).link;
        
        if(ctx.author.bot) return;

        await ctx.createMessage({embed: {
            title: 'Two thumbs up!',
            image: {url: res},
            footer: {text: 'Powered by Some Random API'}
        }});
    }
};

exports.panda = {
    desc: 'Random panda images.',
    async main(bot, ctx) {
        await ctx.channel.sendTyping();

        let res = await got('https://some-random-api.ml/img/panda');
         res = JSON.parse(res.body).link;
        
        if(ctx.author.bot) return;

        await ctx.createMessage({embed: {
            title: 'Have a panda!',
            image: {url: res},
            footer: {text: 'Powered by Some Random API'}
        }});
    }
};

exports.meow = {
    desc: 'Random cat images.',
    async main(bot, ctx) {
        await ctx.channel.sendTyping();

        let res = await got('http://aws.random.cat/meow');
         res = JSON.parse(res.body).file;
        
        if(ctx.author.bot) return;

        await ctx.createMessage({embed: {
            title: 'Nyaaa~',
            image: {url: res},
            footer: {text: 'Powered by Cat as a service'}
        }});
    }
};
 
exports.woof = {
    desc: 'Random dog images.',
    async main(bot, ctx) {
        await ctx.channel.sendTyping();

        let res = await got('http://random.dog/woof');
        
        if(ctx.author.bot) return;

        await ctx.createMessage({embed: {
            title: 'Have a random doggo!',
            image: {url: `http://random.dog/${res.body}`},
            footer: {text: 'Powered by random.dog'}
        }});
    }
};

exports.goose = {
    desc: 'Random goose images.',
    async main(bot, ctx) {
        await ctx.channel.sendTyping();

        let res = await got('https://nekos.life/api/v2/img/goose');
         res = JSON.parse(res.body).url;
        
        if(ctx.author.bot) return;

        await ctx.createMessage({embed: {
            title: 'Honk Honk!',
            image: {url: res},
            footer: {text: 'Powered by nekos.life?!'}
        }});
    }
};

exports.lizard = {
    desc: 'Random lizard images.',
    async main(bot, ctx) {
        await ctx.channel.sendTyping();

        let res = await got('https://nekos.life/api/v2/img/lizard');
         res = JSON.parse(res.body).url;
        
        if(ctx.author.bot) return;

        await ctx.createMessage({embed: {
            title: 'Here is a lizard!',
            image: {url: res},
            footer: {text: 'Powered by nekos.life?!'}
        }});
    }
};
