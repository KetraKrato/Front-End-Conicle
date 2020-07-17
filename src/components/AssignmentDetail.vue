<template>
  <div id="assigndetail">
    <div class="box">
      <div class="post">
        <div class="detail">
          <span class="headdetail">{{DataAssignment.name}}</span>
          <span class="posttime">{{DataAssignment.date_created | formatDateNoTime }}</span>
          <span class="duetime">Due {{DataAssignment.due_date | formatDate }}</span>
          <span v-if="status==1" class="status" v-bind:style="{ color: 'green' }">Turned in</span>
          <span v-else-if="status==2" class="status" v-bind:style="{ color: 'orange' }">Late</span>
          <span v-else-if="status==3" class="status" v-bind:style="{ color: 'red' }">Missing</span>
        </div>
        <div class="des">
          <p>{{DataAssignment.description}}</p>
        </div>
        <div class="FieldFile">
            <div v-if="DataAssignment.assignment_files.length!=0">
            <AssignmentFile v-for="(i,index) in DataAssignment.assignment_files" :key="i" :pathFile="DataAssignment.assignment_files[index].file.url" :nameFile="DataAssignment.assignment_files[index].file.name" :sizeFile="DataAssignment.assignment_files[index].file.size"/>
            </div>
      <!--    <div class="file">
            <a :href="DataAssignment.assignment_files[0].file" download>
              <img src="@/assets/pdf.png" />
              <span class="namefile">File name</span>
              <span class="sizefile">130 kb</span>
            </a>
          </div>
          <div v-if="DataAssignment.assignment_files.length!=0" class="file">
            <a :href="DataAssignment.assignment_files[0].file" download>
              <img />
              <span class="namefile">File name</span>
              <span class="sizefile">130 kb</span>
            </a>
          </div>
          <div v-if="DataAssignment.assignment_files.length!=0" class="file">
            <a :href="DataAssignment.assignment_files[0].file" download>
              <img />
              <span class="namefile">File name</span>
              <span class="sizefile">130 kb</span>
            </a>
          </div> -->
        </div>
      </div>
      <div class="com">
        <div class="commentbox">
          <input placeholder="Add comment ..." type="text" />
          <img src="@/assets/attach.png" />
          <span @click="send()">Send</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AssignmentFile from "@/components/AssignmentFile.vue"
export default {
  data() {
    return {
      show: true,
      status: 3,
      time:""
    };
  },
  components:{
      AssignmentFile,
  },
  props: {
    DataAssignment: Object
  },
  mounted(){
      
  },
  methods: {
    send() {}
  }
};
</script>

<style scoped>
.header {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 32px;
}
.box {
  position: relative;
  width: 1146px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 24px;
}
.post {
  position: relative;
  width: 1146px;
  border-bottom: 1px solid black;
  padding-top: 24px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 4px;
}
.detail {
  position: relative;
  width: 1066px;
  height: 78px;
}
.headdetail {
  position: absolute;
  width: 100%;
  height: 22px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
.posttime {
  position: absolute;
  width: 143px;
  height: 17px;
  top: 29px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  color: #4f4f4f;
}
.duetime {
  position: absolute;
  width: 186px;
  height: 17px;
  right: 0px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: right;
  line-height: 17px;

  color: #4f4f4f;
}
.status {
  position: absolute;
  width: 80px;
  height: 17px;
  right: 0px;
  top: 29px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  text-align: right;
}
.des {
  position: relative;
  width: 1066px;
  height: 44px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
}
.FieldFile {
  content: "";
  display: table;
  clear: both;
}
.file {
  position: relative;
  float: left;
  width: 400px;
  height: 50px;
  border: 1px solid black;
  margin-right: 20px;
  margin-bottom: 20px;
}
.file img {
  margin-left: 30px;
  padding: 5px;
  width: 50px;
  height: 50px;
}
.file .namefile {
  position: absolute;
  top: 7px;
  left: 110px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}
.file .sizefile {
  position: absolute;
  top: 28px;
  left: 110px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
}
.com {
  position: relative;
  padding-top: 16px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 16px;
}
.commentbox {
  position: relative;
  padding: 12px;
  border: 1px solid black;
  border-radius: 5px;
}
.commentbox input {
  position: relative;
  border: #ffffff;
  outline: none;
  width: 88%;
}
.commentbox img {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 90px;
}
.commentbox span {
  position: absolute;
  right: 30px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
</style>