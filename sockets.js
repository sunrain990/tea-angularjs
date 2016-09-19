/**
 * Created by kevin on 16/1/25.
 */
module.exports = function(io){
    io.set('heartbeat interval',5000);
    io.set('heartbeat timeout',60000);


    io.on('connection',function(socket){
        console.log(socket.id);


        socket.on('chat',function(data){
            console.log(data);
            socket.emit('chat',data);
        });

        socket.emit('hello', { some: 'data' });

        socket.on('sendmsg',function(data){
            io.emit('sendmsg',data);
        });



        socket.conn.on('heartbeat', function() {
            var client_ip_address = socket.request.connection.remoteAddress;
            //console.log('heartbeat',socket.id,client_ip_address,moment().format('YYYY-MM-DD h:mm:ss'));
            //服务器端断开，客户端会重新链接
            //socket.conn.close();

            //服务器端删除socket
            //socket.disconnect(true);

            //关闭io服务，不能链接
            //io.close();

            //获取所有在线人员信息
            //socket.emit('onlineUsers',onlineUserInfo);
            console.log('heart break',socket.id,client_ip_address);
        });

    });
}