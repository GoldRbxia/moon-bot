const {
    Schema,
    model
} = require('mongoose');

const Ticket = new Schema({
    guildID: String,
    userID: String,
    channelID: String,
    channelIndex: Number,
    closed: Boolean,
    locked: Boolean,
    claimed: Boolean,
    claimedBy: String,
    OpenTime: String,
})

module.exports = model("ticket-user", Ticket);

/**
 * @INFO
 * Bot Coded by CloudyDev#5970 | https://dsc.gg/cloudydev
 * @INFO
 * Work for Cloudy Coders | https://dsc.gg/cloudydev
 * @INFO
 * Please Mention Us Cloudy Coders, When Using This Code!
 * @INFO
 */