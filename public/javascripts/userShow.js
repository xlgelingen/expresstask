const PAGE={
    init: function(){
        this.bind();
    },
    bind:function(){
        $('#new-submit').on("click",this.addUser);
        $('.update-name').on("click",this.updateName);
        $('.update-email').on("click",this.updateEmail);
        $('.update-password').on("click",this.updatePassword);
        $('.delete-user').on('click',this.delete);
    },

    addUser: function(){
        let id = $("#new-id").val();
        let name = $("#new-name").val();
        let email = $("#new-email").val();
        let password = $("#new-password").val();

        if(!name || !email ||!password){
            alert("缺少必要参数，id可以不填，其他必须填写");
            return;
        }

        $.ajax({
            url: 'api/user',
            data:{id,name,email,password},
            type:'POST',
            success:function(data){
                if(data.code == 200){
                    alert("添加用户成功");
                    location.reload();
                }else{
                    console.log(data);
                }
            },
            error:function(err){
                console.log(err);
            }
        });
    },

    updateName:function(){
        let id = $(this).data("id");
        let name = $(this).parent().find(".user-name").val();
        console.log(id,name);


        if(!name || !id){
            alert("缺少必要参数");
            return;
        }

        $.ajax({
            url:'/api/user/updatename',
            data:{id,name},
            type:'PUT',
            success:function(data){
                if(data.code == 200){
                    alert('已成功修改用户名！');
                    location.reload();
                }else{
                    console.log(data);
                }
            },
            error:function(err){
                console.log(err);
            }
        })
    },

    updateEmail:function(){
        let id = $(this).data("id");
        let email = $(this).parent().find(".user-email").val();

        if(!email || !id){
            alert("缺少必要参数");
            return;
        }

        $.ajax({
            url:'/api/user/updateemail',
            data:{id,email},
            type:'PUT',
            success:function(data){
                if(data.code == 200){
                    alert('已成功修改邮箱！');
                    location.reload();
                }else{
                    console.log(data);
                }
            },
            error:function(err){
                console.log(err);
            }
        })
    },

    updatePassword:function(){
        let id = $(this).data("id");
        let password = $(this).parent().find(".user-password").val();

        if(!password || !id){
            alert("缺少必要参数");
            return;
        }

        $.ajax({
            url:'/api/user/updatepassword',
            data:{id,password},
            type:'PUT',
            success:function(data){
                if(data.code == 200){
                    alert('已成功修改密码！');
                    location.reload();
                }else{
                    console.log(data);
                }
            },
            error:function(err){
                console.log(err);
            }
        })
    },

    delete: function(){
        let id =$(this).data('id');
        $.ajax({
            url:'/api/user',
            data:{id},
            type:'DELETE',
            success:function(data){
                if(data.code == 200){
                    alert('删除成功!');
                    location.reload();
                }else{
                    console.log(data);
                }
            },
            error:function(err){
                console.log(err);
            }
        })

    },
    
}

PAGE.init();
