<template>
    <div class="header">
    	<nav class="navbar navbar-default">
			  <div class="container-fluid">
			    <!-- Brand and toggle get grouped for better mobile display -->
			    <div class="navbar-header">
			      	<a class="navbar-brand" href="#">Brand</a>
			    </div>

			    <!-- Collect the nav links, forms, and other content for toggling -->
			    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <form class="navbar-form navbar-left">
			        <div class="form-group">
			          <input type="text" class="form-control" placeholder="Search">
			        </div>
			        <button type="submit" class="btn btn-default">Submit</button>
			      </form>
			      <ul class="nav navbar-nav navbar-right">
			        <li class="dropdown">
			          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
			          <ul class="dropdown-menu">
			            <li class="logout" @click="doLogout()">Logout</li>

			          </ul>
			        </li>
			      </ul>
			    </div><!-- /.navbar-collapse -->
			  </div><!-- /.container-fluid -->
			</nav>
    </div>
</template>

<script>

   export default {
	   data: function(){
		    return {
		      //data model
		    }
	   },
	   methods: {
	       doLogout: function(){
	           this.$auth.destroyToken();
	           this.$router.push('/redirect');
               alert('로그아웃 되었습니다.');
		   }
	   }
	}
</script>

<style>
	.logout {
		cursor: pointer;
		padding: 5px 10px;
	}
</style>
