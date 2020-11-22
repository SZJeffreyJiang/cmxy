describe('homework',function(){
    beforeEach(()=>{
        cy.visit("https://eleduck.com/");
        cy.viewport(1400, 1000);

    })
    it('homework',function(){

        //查找测试开发相关帖子
        cy.get('input[placeholder="请输入关键字"]')
        .click()
        .type('测试开发')
        .type("{enter}");

        //验证查询是否结果
        cy.get('body').should('contain', '为您找到以下内容');

        //访问篱下采菊发布的帖子
        cy.get('.post-item')
        .filter(':contains("篱下采菊")')
        .filter(':contains("测试开发")')
        .find('.post-title a').click();
       
        //添加页面等待
        cy.location('pathname', {timeout: 60000}).should('include', '/posts');

        //验证自动化测试字段
        cy.get('body').should('contain', '自动化测试');

    });
})
