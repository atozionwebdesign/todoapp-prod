import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../app/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const reqMethod = req.method;
    const {id} = req.query;
    const {todo, start_date, end_date, details} = req.body;
    
    pool.getConnection((err, connection) => {
        if (err){
            console.error(err);
            return;
        }
        
        switch(reqMethod) {
            case "GET":
                if(id){
                    connection.query('SELECT * FROM todoTbl WHERE id = ?', [id], (err, result) => {
                        if(result){
                            res.status(200).json(result);
                        } else {
                            res.status(404).send('Item not found')
                        }
                    });
                } else {
                    connection.query('SELECT * FROM todoTbl ORDER BY start_date', [id], (err, results) => {
                        if(results){
                            res.status(200).json(results);
                        } else {
                            res.status(404).send('Items not found')
                        }
                    });
                }
                break;
            case "POST":
                connection.query('INSERT INTO todoTbl(todo, start_date, end_date, details) values(?, ?, ?, ?)', [todo, new Date(start_date), new Date(end_date), details],(err) => {
                    if(err){
                        console.error('Error executing query: ', err)
                        res.status(400).send('Error creating todo');
                        return;
                    }
                    res.status(201).send('Todo created successfully');
                });
                break;
            case "PUT":
                connection.query('UPDATE todoTbl SET todo = ?, start_date = ?, end_date = ?, details = ? WHERE id = ?', [todo, new Date(start_date), new Date(end_date), details, id], (err) => {
                    if (err){
                        console.error('Error executing query: ', err);
                        res.status(400).send('Error updating todo');
                        return;
                    }
                    res.status(200).send('Todo updated successfully');
                })
                break;
            case "DELETE":
                connection.query('DELETE FROM todoTbl WHERE (ID =?)', [id], (err) => {
                    if(err){
                        console.error('Error executing query: ', err );
                        res.status(400).send('Error deleting todo');
                        return;
                    }
                    res.status(200).send('Todo deleted successfully');
                })
                break;
        } 
        connection.release();
    })
}