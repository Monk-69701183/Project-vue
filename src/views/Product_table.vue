<template>
  <!-- Container หลัก -->
  <div class="container py-5" style="background-color: #fff;">

    <!-- หัวข้อ -->
    <h2 class="text-center mb-4">รายการสินค้า</h2>

    <!-- ตารางสินค้า -->
    <div class="table-responsive">
      <table class="table table-bordered table-hover align-middle">

        <!-- ส่วนหัวตาราง -->
        <thead class="table-dark">
          <tr>
            <th width="80">ID</th>
            <th width="150">รูปภาพ</th>
            <th>ชื่อสินค้า</th>
            <th width="120">ราคา</th>
            <th width="120">จัดการ</th>
          </tr>
        </thead>

        <!-- ส่วนข้อมูลสินค้า -->
        <tbody>

          <!-- วนลูปแสดงสินค้า -->
          <tr v-for="product in products" :key="product.id"  >
            <!-- รหัสสินค้า -->
            <td class="text-center">
              {{ product.id }}
            </td>

            <!-- รูปสินค้า -->
            <td class="text-center">
              <img
                :src="product.thumbnail"
                alt="Product Image"
                width="100"
                height="80"
                style="object-fit: contain"
              />
            </td>

            <!-- ชื่อสินค้า -->
            <td>
              {{ product.title }}
            </td>

            <!-- ราคา -->
            <td class="text-end">
              ${{ product.price }}
            </td>

            <!-- ปุ่ม -->
            <td class="text-center">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
              >
                Add
              </button>
            </td>

          </tr>

        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    // สร้างตัวแปร products เพื่อเก็บข้อมูลสินค้า
    const products = ref([]);

    // ฟังก์ชันดึงข้อมูลสินค้าจาก Fake Store API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        products.value = data.products;
 
      
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // เรียก fetchProducts เมื่อคอมโพเนนต์ถูกโหลด
    onMounted(fetchProducts);

    return {
      products, // ส่งออกตัวแปร products เพื่อใช้ใน Template
    };
  },
};
</script>