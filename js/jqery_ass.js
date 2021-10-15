function addRow() {
                    $("tbody").append(`
                        <tr>
                            <td class="width-50">
                                <button class="btn btn-outline-primary del-btn">
                                   Delete
                                </button>
                            </td>
                            <td class="width-300">
                                <input type="text" class="form-control text-capitalize product-name">
                            </td>
                            <td class="width-150">
                                <input type="number" class="form-control text-right price" value="0" min="0">
                            </td>
                            <td class="width-150">
                                <input type="number" class="form-control text-right quantity"  value="0" min=0">
                            </td>
                            <td class="text-right">
                                <h4 class="mb-0 subtotal">0</h4>
                            </td>
                        </tr>
                    `);
                    }

                    function total(){
                        $("#total").html($('.subtotal').toArray().map(el=>el.innerHTML).reduce((x,y)=>Number(x)+Number(y)))
                    }
                   
                    addRow();
                    $(".add-row-btn").click(function(){
                        addRow();
                    })

                    $("tbody").delegate(".del-btn","click",function(){

                        if($("tbody tr").toArray().length===1){
                            addRow();
                        }
                        $(this).parentsUntil("tbody").remove();
                        total();
                    })

                    $("tbody").delegate("input","keyup change",function(){
                        var price=$(this).parentsUntil("tbody").find(".price").val();
                        var quantity=$(this).parentsUntil("tbody").find(".quantity").val();
                        $(this).parentsUntil("tbody").find(".subtotal").html(price*quantity);
                        total();     
                    })

